import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { GameSession } from '../models/game-session';
import { PlayerData } from '../../player-data/models/playerData';
import { RandomNumberGenerator } from '../../util/random-number-generator';

@Injectable({
  providedIn: 'root'
})
export class GameSessionFactory {
  public constructor(private readonly randomNumberGenerator: RandomNumberGenerator) {
  }

  public create(amountOfNumbersToGuess: number, playerData: PlayerData): GameSession {
    const generatedId: string = uuidv4();
    const answer: string = this.randomNumberGenerator.generateRandomNumber(amountOfNumbersToGuess);

    return new GameSession(generatedId, amountOfNumbersToGuess, answer, playerData);
  }
}
