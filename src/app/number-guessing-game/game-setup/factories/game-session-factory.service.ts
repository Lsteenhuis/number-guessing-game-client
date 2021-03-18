import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { GameSession } from '../models/game-session';
import { PlayerData } from '../../player-data/models/playerData';

@Injectable({
  providedIn: 'root'
})
export class GameSessionFactory {
  public create(amountOfNumbersToGuess: number, playerData: PlayerData): GameSession {
    const generatedId: string = uuidv4();

    return new GameSession(generatedId, amountOfNumbersToGuess, playerData);
  }
}
