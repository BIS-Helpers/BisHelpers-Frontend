import { ErrorBody } from 'src/app/core/interfaces/backend-errors';

export interface AuthSignupStateInterface {
  isSubmitting: boolean;
  validationErrors: ErrorBody[] | null | undefined;
  redirectToLoginPage: boolean;
}
