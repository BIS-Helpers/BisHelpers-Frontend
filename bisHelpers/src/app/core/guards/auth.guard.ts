// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/modules/auth/store/login-reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  isUser$ = this.store.select(selectUser);
  canActivate(): Observable<boolean> {
    return this.isUser$.pipe(
      map((user) => {
        if (user && user.token) {
          return true;
        }
        this.router.navigateByUrl('/auth/login');
        return false;
      })
    );
  }
}
