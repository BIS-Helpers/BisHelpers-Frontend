import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { TokenService } from '../../core/services/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private currentToken: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private tokenService: TokenService
  ) {
    this.tokenService.getTokenChangeObservable().subscribe((token) => {
      if (token) {
        this.validateToken(token);
      }
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.currentToken = this.localStorageService.getItem('accessToken');
    if (this.currentToken) {
      const clonedRequest = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${this.currentToken}`
        ),
      });

      console.log('Intercepted HTTP request:', clonedRequest);

      return next.handle(clonedRequest).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            console.log('HTTP response:', event);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.authService.logout();
          }
          return throwError(error);
        })
      );
    } else {
      console.log(
        'No token available, sending request without Authorization header:',
        req
      );
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.authService.logout();
          }
          return throwError(error);
        })
      );
    }
  }

  private validateToken(token: string) {
    this.authService.validateToken(token).subscribe(
      (isValid) => {
        if (isValid) {
          console.log('Token is valid');
          this.currentToken = token;
        } else {
          console.error('Token validation failed');
          this.currentToken = null;
          this.authService.logout();
        }
      },
      (error) => {
        console.error('Token validation error', error);
        this.currentToken = null;
        this.authService.logout();
      }
    );
  }
}
