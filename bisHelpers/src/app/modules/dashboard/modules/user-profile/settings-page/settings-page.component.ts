import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomizedValidators } from 'src/app/modules/auth/validators/main.validator';
import { UserService } from '../../services/user.service';
import { Student } from 'src/app/core/interfaces/student';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css'],
  providers: [MessageService],
})
export class SettingsPageComponent implements OnInit {
  generalInformation: FormGroup = new FormGroup({});
  passwordInformation: FormGroup = new FormGroup({});
  user!: Student;
  generalInformationIsLoading = true;
  isSubmitting = false;
  generalInformationIsSubmitting = false;
  passwordInformationIsSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.loadUserData();
    this.user = this.localStorageService.getItem('user') as unknown as Student;
  }

  private initForms(): void {
    this.generalInformation = this.fb.nonNullable.group({
      fullName: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(30),
          CustomizedValidators.noArabic(),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      email: ['', [Validators.email]],
      phoneNumber: [
        '',
        [Validators.pattern('^[0-9]*$'), Validators.minLength(11)],
      ],
      birthDate: [''],
    });

    this.passwordInformation = this.fb.nonNullable.group({
      oldPassword: ['', [Validators.required]],
      newPassword: [
        '',
        [Validators.required, CustomizedValidators.passwordStrength()],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          CustomizedValidators.passwordMatch('newPassword'),
        ],
      ],
    });
  }

  private loadUserData(): void {
    this.userService.getUser().subscribe((user) => {
      if (user) {
        this.generalInformationIsLoading = false;
        this.user = user;
        this.generalInformation.patchValue({
          fullName: this.user.fullName,
          email: this.user.email,
          phoneNumber: this.user.phoneNumber,
          birthDate: new Date(this.user.birthDate),
        });
      }
    });
  }

  onSubmit(formName: string): void {
    if (formName === 'generalInformation') {
      this.submitGeneralInformation();
    } else if (formName === 'passwordInformation') {
      this.submitPasswordInformation();
    }
  }

  private submitGeneralInformation(): void {
    if (this.generalInformation.invalid) {
      this.showValidationErrors(this.generalInformation);
      return;
    }

    this.generalInformationIsSubmitting = true;

    const generalInformationRequest = {
      ...this.generalInformation.value,
      gender: this.user.gender,
    };
    if (generalInformationRequest.birthDate) {
      generalInformationRequest.birthDate = this.formatDate(
        new Date(generalInformationRequest.birthDate)
      );
    }

    this.userService.updateUser(generalInformationRequest).subscribe({
      next: () => {
        this.generalInformationIsSubmitting = false;
        this.localStorageService.setItem('user', {
          ...this.user,
          ...generalInformationRequest,
        });
        this.showMessagesForFields(this.generalInformation);
      },
      error: (error) => {
        this.generalInformationIsSubmitting = false;
        this.handleErrorResponse(
          error,
          'An error occurred while updating information'
        );
      },
    });
  }

  private submitPasswordInformation(): void {
    if (this.passwordInformation.invalid) {
      this.showValidationErrors(this.passwordInformation);
      return;
    }
    this.passwordInformationIsSubmitting = true;

    const { oldPassword, newPassword } = this.passwordInformation.value;

    if (oldPassword === newPassword) {
      this.passwordInformationIsSubmitting = false;
      this.showMessage('error', 'Error', 'New password must be different');
      return;
    }
    if (
      this.passwordInformation.get('newPassword')?.value !==
      this.passwordInformation.get('confirmPassword')?.value
    ) {
      this.passwordInformationIsSubmitting = false;
      this.showMessage('error', 'Error', 'Passwords do not match');
      return;
    }
    this.userService.resetPassword(oldPassword, newPassword).subscribe({
      next: () => {
        this.showMessage('success', 'Success', 'Password updated successfully');
        this.passwordInformationIsSubmitting = false;
        this.passwordInformation.reset();
      },
      error: (error) => {
        this.passwordInformationIsSubmitting = false;
        this.handleErrorResponse(
          error,
          'An error occurred while updating password'
        );
      },
    });
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return [year, month, day].join('-');
  }

  private showValidationErrors(form: FormGroup): void {
    Object.keys(form.controls).forEach((key) => {
      const control = form.get(key);
      if (control && control.errors) {
        const errorMessage = CustomizedValidators.getErrorMessage(control);
        console.log(control);
        console.log(errorMessage);

        if (errorMessage) {
          this.showMessage('error', key, errorMessage);
        }
      }
    });
  }

  private showMessagesForFields(form: FormGroup): void {
    Object.keys(form.controls).forEach((key) => {
      this.showMessage(
        'success',
        'Success',
        `${this.capitalizeFirstLetter(key)} updated successfully`
      );
    });
  }

  private handleErrorResponse(error: any, defaultMessage: string): void {
    if (error.error.errors && Array.isArray(error.error.errors)) {
      error.error.errors.forEach((err: any) => {
        this.showMessage('error', 'Error', err.details || defaultMessage);
      });
    } else {
      this.showMessage('error', 'Error', defaultMessage);
    }
  }

  private showMessage(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity, summary, detail });
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
