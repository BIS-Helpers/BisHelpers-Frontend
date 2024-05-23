import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthSignupStateInterface } from '../interfaces/auth-signup-state.interface';
import { signupAuthActions } from './signup-action';

const initialState: AuthSignupStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  redirectToLoginPage: false,
};

const signupAuthFeature = createFeature({
  name: 'signupAuth',
  reducer: createReducer(
    initialState,
    on(signupAuthActions.signup, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(signupAuthActions.signupSuccess, (state) => ({
      ...state,
      isSubmitting: false,
      redirectToLoginPage: true,
    })),
    on(signupAuthActions.signupFailure, (state, action) => {
      console.log('signupFailure action received:', action);
      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.errors.errors,
      };
    })
  ),
});

export const {
  name: signupAuthFeatureKey,
  reducer: signupReducer,
  selectIsSubmitting,
  selectRedirectToLoginPage,
  selectValidationErrors,
} = signupAuthFeature;
