import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  Gender,
  SignupRequestInterface,
} from '../interfaces/signup-request.interface';
import { CustomizedValidators } from '../validators/main.validator';
import { Store } from '@ngrx/store';
import { signupAuthActions } from '../store/signup-action';
import { combineLatest } from 'rxjs';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../store/signup-reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  genderOptions: Gender[] = [{ type: 'Male' }, { type: 'Female' }];
  errorMessages: { [key: string]: string } = {};

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.signupForm = this.fb.nonNullable.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          CustomizedValidators.noArabic(),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      collegeId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(11),
        ],
      ],
      password: [
        '',
        [Validators.required, CustomizedValidators.passwordStrength()],
      ],
      confirmPassword: [
        '',
        [Validators.required, CustomizedValidators.passwordMatch()],
      ],
      dateOfJoin: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit() {
    const request: SignupRequestInterface = this.createSignupRequest(
      this.signupForm.value
    );
    this.store.dispatch(signupAuthActions.signup({ request }));
    console.log(request);
  }

  createSignupRequest(formValue: any): SignupRequestInterface {
    const { gender, dateOfJoin, birthDate, ...rest } = formValue;

    const formattedBirthDate = birthDate
      ? this.formatDate(new Date(birthDate))
      : null;
    const formattedDateOfJoin = dateOfJoin
      ? this.formatDate(new Date(dateOfJoin))
      : null;
    const typeOfGender = gender.type;

    const request = {
      ...rest,
      birthDate: formattedBirthDate,
      dateOfJoin: formattedDateOfJoin,
      gender: typeOfGender,
    };
    delete request.confirmPassword;

    return request;
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formatedDate = [year, month, day].join('-');

    return formatedDate;
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.signupForm.get(controlName);
    return control ? CustomizedValidators.getErrorMessage(control) : null;
  }
}
