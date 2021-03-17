import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { GameSettings } from './interfaces/game-settings';
import { validateAmountOfNumbersToGuess } from './validators/amount-of-numbers-to-guess-validator';

@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent {
  @Output()
  public gameSettingsEventEmitter: EventEmitter<GameSettings> = new EventEmitter<GameSettings>();

  public gameSettingsForm: FormGroup;

  public constructor(private readonly formBuilder: FormBuilder) {
    this.gameSettingsForm = this.formBuilder.group({
      amountOfNumbersToGuess: new FormControl('', [Validators.required, validateAmountOfNumbersToGuess])
    });
  }

  public startNewGame() {
    this.gameSettingsEventEmitter.emit(this.gameSettingsForm.value);
  }
}


