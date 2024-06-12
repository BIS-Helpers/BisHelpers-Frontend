import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { academicRegisterActions } from './registered-action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GpaService } from '../../services/gpa.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

export const academicRegisterEffects = createEffect(
  (
    actions$ = inject(Actions),
    gpaService = inject(GpaService),
    localStorageService = inject(LocalStorageService)
  ) => {
    return actions$.pipe(
      ofType(academicRegisterActions.register),
      switchMap(({ request }) => {
        return gpaService.postRegisterAcademicLectures(request).pipe(
          map(() => {
            localStorageService.setItem('IsAllowed', true);
            return academicRegisterActions.academicRegisterSuccess();
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            const errors = errorResponse.error
              ? errorResponse.error
              : { errors: 'Unknown error' };
            return of(
              academicRegisterActions.academicRegisterFailure({ errors })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterAcademicRegister = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(academicRegisterActions.academicRegisterSuccess),
      tap(() => {
        router.navigateByUrl('/dashboard');
      })
    );
  },
  { functional: true, dispatch: false }
);
