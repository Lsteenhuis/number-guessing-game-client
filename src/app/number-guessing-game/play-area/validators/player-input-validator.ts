import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function validatePlayerInput(amountOfNumbers: number): ValidatorFn {
  // todo fix bug where numbers which start with a 0 are considered invalid numbers.
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.userInput === null || control.value.userInput === undefined) {
      return { isValid: false };
    }

    if (control.value.userInput.toString().length === amountOfNumbers) {
      return null;
    }

    return { isValid: false };
  };
}
