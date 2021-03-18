import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { GameSession } from './models/game-session';
import { validateAmountOfNumbersToGuess } from './validators/amount-of-numbers-to-guess-validator';
import { GameSettingsFactory } from './factories/game-settings.factory';

@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent {
  @Output()
  public gameSettingsEventEmitter: EventEmitter<GameSession> = new EventEmitter<GameSession>();

  public gameSettingsForm: FormGroup;

  public constructor(private readonly formBuilder: FormBuilder,
    private readonly gameSettingsFactory: GameSettingsFactory) {
    this.gameSettingsForm = this.formBuilder.group({
      amountOfNumbersToGuess: new FormControl('', [Validators.required, validateAmountOfNumbersToGuess])
    });
  }

  public startNewGame() {
    const gameSettings: GameSession = this.gameSettingsFactory.create(this.gameSettingsForm.value.amountOfNumbersToGuess);

    this.gameSettingsEventEmitter.emit(gameSettings);
  }
}
