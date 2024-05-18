import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { authActions } from './login-action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LoginResponseInterface } from '../interfaces/login-response-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';

export const loginEffects = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    localStorageService = inject(LocalStorageService)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((loginresponse: LoginResponseInterface) => {
            localStorageService.setItem('accessToken', loginresponse.token);
            return authActions.loginSuccess({ loginresponse });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.loginFailure({ errors: errorResponse.error })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterLogin = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/dashboard');
      })
    );
  },
  { functional: true, dispatch: false }
);
