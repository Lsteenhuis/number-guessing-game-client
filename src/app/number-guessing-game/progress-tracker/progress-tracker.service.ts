import { Injectable } from '@angular/core';
import { ProgressState } from './enums/progress-state';

@Injectable({
  providedIn: 'root'
})
export class ProgressTrackerService {
  private readonly applicationStates: ProgressState[];

  public constructor() {
    this.applicationStates = [
      ProgressState.PlayerData,
      ProgressState.GameSetup,
      ProgressState.PlayGame
    ];
  }

  public getNextStep(currentStep: ProgressState): ProgressState {
    const currentIndex: number = this.applicationStates.indexOf(currentStep);

    return this.getNextProgressState(currentIndex);
  }

  public getPreviousStep(currentStep: ProgressState): ProgressState {
    const currentIndex: number = this.applicationStates.indexOf(currentStep);

    return this.getPreviousProgressState(currentIndex);
  }

  private getNextProgressState(currentIndex: number): ProgressState {
    const maxIndex: number = this.applicationStates.length - 1;

    if (currentIndex === maxIndex) {
      return ProgressState.PlayGame;
    }

    return this.applicationStates[currentIndex + 1];
  }

  private getPreviousProgressState(currentIndex: number): ProgressState {
    if (currentIndex === 0) {
      return ProgressState.PlayerData;
    }

    return this.applicationStates[currentIndex - 1];
  }
}
