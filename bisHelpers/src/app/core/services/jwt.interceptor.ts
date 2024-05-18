import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (!token) {
      return next.handle(req);
    }

    return this.authService.validateToken(token).pipe(
      switchMap((isValid) => {
        if (isValid) {
          const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(authReq);
        } else {
          this.authService.logout();
          return throwError('Token is invalid');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}
