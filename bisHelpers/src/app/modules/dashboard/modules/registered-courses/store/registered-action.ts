import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AcademicRegisterRequest } from '../../interfaces/register-request';
import { BackendErrorsInterface } from 'src/app/core/interfaces/backend-errors';

export const academicRegisterActions = createActionGroup({
  source: 'AcademicRegister',
  events: {
    Register: props<{ request: AcademicRegisterRequest }>(),
    academicRegisterSuccess: emptyProps(),
    academicRegisterFailure: props<{ errors: BackendErrorsInterface }>(),
  },
});
