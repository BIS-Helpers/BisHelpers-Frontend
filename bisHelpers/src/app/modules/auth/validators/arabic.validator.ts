import { ValidatorFn, AbstractControl } from '@angular/forms';

export function noArabicValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const arabicPattern = /[\u0600-\u06FF\u0750-\u077F]/;

    if (!value) {
      return null;
    }

    const containsArabic = arabicPattern.test(value);
    return containsArabic ? { noArabic: true } : null;
  };
}
