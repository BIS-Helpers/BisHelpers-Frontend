import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.root.get('password')?.value;
    const confirmPassword = control.value;

    if (!password || !confirmPassword) {
      return { required: true };
    }

    const passwordsMatch = password === confirmPassword;
    return passwordsMatch ? null : { passwordMismatch: true };
  };
}
