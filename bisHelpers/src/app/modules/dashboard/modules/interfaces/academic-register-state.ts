import { ErrorBody } from 'src/app/core/interfaces/backend-errors';

export interface AcademicRegisterState {
  isSubmitting: boolean;
  validationErrors: ErrorBody[] | null | undefined;
}
