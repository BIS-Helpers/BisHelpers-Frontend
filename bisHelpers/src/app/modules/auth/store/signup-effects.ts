import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { signupAuthActions } from './signup-action';
import { Router } from '@angular/router';

export const signupEffects = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(signupAuthActions.signup),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map(() => {
            return signupAuthActions.signupSuccess();
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            const errors = errorResponse.error
              ? errorResponse.error
              : { errors: 'Unknown error' };
            return of(signupAuthActions.signupFailure({ errors }));
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterSignup = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(signupAuthActions.signupSuccess),
      tap(() => {
        router.navigateByUrl('/auth/login');
      })
    );
  },
  { functional: true, dispatch: false }
);
