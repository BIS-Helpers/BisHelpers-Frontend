import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!password) {
      return null;
    }

    const valid = passwordRegex.test(password);
    return valid ? null : { passwordStrength: true };
  };
}
