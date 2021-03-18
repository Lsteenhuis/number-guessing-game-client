import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function validatePlayerInput(amountOfNumbers: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.userInput.toString().length === amountOfNumbers) {
      return null;
    }

    return { isValid: false };
  };
}
