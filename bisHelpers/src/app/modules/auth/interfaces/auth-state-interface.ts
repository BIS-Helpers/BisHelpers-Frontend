import { ErrorBody } from 'src/app/core/interfaces/backend-errors';
import { LoginResponseInterface } from './login-response-interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  user: LoginResponseInterface | null | undefined;
  token: string | null;
  validationErrors: ErrorBody[] | null | undefined;
}
