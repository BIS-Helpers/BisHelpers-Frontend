import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/core/interfaces/backend-errors';
import { SignupRequestInterface } from '../interfaces/signup-request.interface';

export const signupAuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Signup: props<{ request: SignupRequestInterface }>(),
    'Signup success': emptyProps(),
    'Signup failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
