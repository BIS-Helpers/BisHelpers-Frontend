import { createActionGroup, props } from '@ngrx/store';
import { LoginRequestInterface } from '../interfaces/login-request-interface';
import { LoginResponseInterface } from '../interfaces/login-response-interface';
import { BackendErrorsInterface } from 'src/app/core/interfaces/backend-errors';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<{ request: LoginRequestInterface }>(),
    'Login success': props<{ loginresponse: LoginResponseInterface }>(),
    'Login failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
