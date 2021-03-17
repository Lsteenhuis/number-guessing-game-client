import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { GameSettings } from '../models/game-settings';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsFactory {
  public create(amountOfNumbersToGuess: number): GameSettings {
    const generatedId: string = uuidv4();

    return new GameSettings(generatedId, amountOfNumbersToGuess);
  }
}
