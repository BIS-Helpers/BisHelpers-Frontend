import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../interfaces/auth-state-interface';
import { authActions } from './login-action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  token: null,
  user: undefined,
  validationErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      user: action.loginresponse,
      token: action.loginresponse.token,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors.errors,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectUser,
  selectValidationErrors,
} = authFeature;
