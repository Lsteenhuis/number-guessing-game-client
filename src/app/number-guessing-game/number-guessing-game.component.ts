import { Component } from '@angular/core';
import { PlayerData } from './player-data/interfaces/playerData';

@Component({
  selector: 'app-number-guessing-game',
  templateUrl: './number-guessing-game.component.html',
  styleUrls: ['./number-guessing-game.component.scss']
})
export class NumberGuessingGameComponent {
  public playerData: PlayerData | undefined;

  public setPlayerData(playerData: PlayerData) {
    this.playerData = playerData;
  }

  public isPlayerDataSet(): boolean {
    return this.playerData !== undefined;
  }
}
