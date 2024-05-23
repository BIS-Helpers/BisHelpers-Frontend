import { AbstractControl, ValidatorFn } from '@angular/forms';
import { noArabicValidator } from './arabic.validator';
import { passwordStrengthValidator } from './password-strength.validator';
import { passwordMatchValidator } from './password-match.validator';

export class CustomizedValidators {
  static noArabic(): ValidatorFn {
    return noArabicValidator();
  }

  static passwordStrength(): ValidatorFn {
    return passwordStrengthValidator();
  }

  static passwordMatch(): ValidatorFn {
    return passwordMatchValidator();
  }

  static getErrorMessage(control: AbstractControl): string | null {
    if (control.errors) {
      for (const errorKey in control.errors) {
        if (Object.prototype.hasOwnProperty.call(control.errors, errorKey)) {
          switch (errorKey) {
          case 'required':
            return 'This field is required';
          case 'minlength':
            return `Minimum length is ${control.errors['minlength'].requiredLength}`;
          case 'maxlength':
            return `Maximum length is ${control.errors['maxlength'].requiredLength}`;
          case 'pattern':
            return 'Invalid format';
          case 'email':
            return 'Invalid email address';
          case 'noArabic':
            return 'Arabic characters are not allowed';
          case 'passwordStrength':
            return 'Password must be at least 8 characters long and include a number, an uppercase letter, a lowercase letter, and a special character';
          case 'passwordMismatch':
            return 'Passwords do not match';
          default:
            return 'Invalid field';
          }
        }
      }
    }
    return null;
  }
}
