import { AbstractControl } from '@angular/forms';

export function validateAmountOfNumbersToGuess(control: AbstractControl) {
  if (typeof control.value !== 'number') {
    return { validateAmountOfNumbersToGuess: { valid: false } };
  }

  const amountOfNumbers: Number = getLengthOfNumber(control.value);
  if (amountOfNumbers >= 4 && amountOfNumbers <= 8) {
    return null;
  }

  return { validateAmountOfNumbersToGuess: { valid: false } };
}

function getLengthOfNumber(number: number) {
  return number.toString().length;
}
