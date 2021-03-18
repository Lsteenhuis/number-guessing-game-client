import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { GameSession } from '../models/game-session';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsFactory {
  public create(amountOfNumbersToGuess: number): GameSession {
    const generatedId: string = uuidv4();

    return new GameSession(generatedId, amountOfNumbersToGuess);
  }
}
