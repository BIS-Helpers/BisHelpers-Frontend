import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthLoginStateInterface } from '../interfaces/auth-login-state.interface';
import { loginAuthActions } from './login-action';

const initialState: AuthLoginStateInterface = {
  isSubmitting: false,
  user: undefined,
  validationErrors: null,
  isLoggedIn: false,
};

const loginAuthFeature = createFeature({
  name: 'loginAuth',
  reducer: createReducer(
    initialState,
    on(loginAuthActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(loginAuthActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      user: action.loginresponse,
    })),
    on(loginAuthActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors.errors,
    }))
  ),
});

export const {
  name: loginAuthFeatureKey,
  reducer: loginReducer,
  selectIsSubmitting,
  selectUser,
  selectValidationErrors,
  selectIsLoggedIn,
} = loginAuthFeature;
