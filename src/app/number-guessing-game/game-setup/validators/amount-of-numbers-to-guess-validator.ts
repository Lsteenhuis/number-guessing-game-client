import { AbstractControl } from '@angular/forms';

export function validateAmountOfNumbersToGuess(control: AbstractControl) {
  if (typeof control.value !== 'number') {
    return { validateAmountOfNumbersToGuess: { valid: false } };
  }

  if (control.value >= 4 && control.value <= 8) {
    return null;
  }

  return { validateAmountOfNumbersToGuess: { valid: false } };
}
