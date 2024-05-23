import { ErrorBody } from 'src/app/core/interfaces/backend-errors';
import { LoginResponseInterface } from './login-response.interface';

export interface AuthLoginStateInterface {
  isSubmitting: boolean;
  user: LoginResponseInterface | null | undefined;
  validationErrors: ErrorBody[] | null | undefined;
  isLoggedIn: boolean;
}
