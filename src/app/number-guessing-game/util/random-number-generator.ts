import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGenerator {
  public generateRandomNumber(amountOfNumbers: number): string {
    let numberString: string = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < amountOfNumbers; i++) {
      numberString += Math.floor(Math.random() * 9) + 1;
    }

    return numberString;
  }
}
