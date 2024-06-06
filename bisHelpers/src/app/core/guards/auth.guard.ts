import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}
  // canActivate(): boolean {
  //   return true;
  // }

  canActivate(): Observable<boolean> {
    const token = this.localStorageService.getItem('accessToken');
    if (!token) {
      this.authService.logout();
      return of(false);
    }

    return this.authService.validateToken(token).pipe(
      map((isValid) => {
        if (isValid) {
          return true;
        } else {
          this.authService.logout();
          return false;
        }
      }),
      catchError(() => {
        this.authService.logout();
        return of(false);
      })
    );
  }
}
