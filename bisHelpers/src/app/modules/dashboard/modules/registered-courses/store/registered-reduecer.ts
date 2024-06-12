import { createFeature, createReducer, on } from '@ngrx/store';
import { AcademicRegisterState } from '../../interfaces/academic-register-state';
import { academicRegisterActions } from './registered-action';

const initialState: AcademicRegisterState = {
  isSubmitting: false,
  validationErrors: null,
};

const AcademicRegisterFeature = createFeature({
  name: 'AcademicRegister',
  reducer: createReducer(
    initialState,
    on(academicRegisterActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(academicRegisterActions.academicRegisterSuccess, (state) => ({
      ...state,
      isSubmitting: false,
      hasAcademicRegister: true,
    })),
    on(academicRegisterActions.academicRegisterFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors.errors,
    }))
  ),
});

export const {
  name: academicRegisterFeatureKey,
  reducer: academicRegisterReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = AcademicRegisterFeature;
