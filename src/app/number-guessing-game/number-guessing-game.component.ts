import { Component } from '@angular/core';
import { PlayerData } from './player-data/models/playerData';
import { ProgressState } from './progress-tracker/enums/progress-state';
import { ProgressTrackerService } from './progress-tracker/progress-tracker.service';
import { GameSession } from './game-setup/models/game-session';

@Component({
  selector: 'app-number-guessing-game',
  templateUrl: './number-guessing-game.component.html',
  styleUrls: ['./number-guessing-game.component.scss'],
})
export class NumberGuessingGameComponent {
  public progressState: ProgressState = ProgressState.PlayerData;
  public playerData: PlayerData | undefined;
  public gameSettings: GameSession | undefined;

  public constructor(private readonly progressTrackerService: ProgressTrackerService) {
  }

  public setPlayerData(playerData: PlayerData) {
    this.playerData = playerData;

    this.goToNextState();
  }

  public setGameSettings(gameSettings: GameSession) {
    this.gameSettings = gameSettings;

    this.goToNextState();
  }

  public goToNextState(): void {
    this.progressState = this.progressTrackerService.getNextStep(this.progressState);
  }

  public goToPreviousState(): void {
    this.progressState = this.progressTrackerService.getPreviousStep(this.progressState);
  }
}
