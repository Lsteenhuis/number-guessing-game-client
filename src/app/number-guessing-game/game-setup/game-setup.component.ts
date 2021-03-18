import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { GameSession } from './models/game-session';
import { validateAmountOfNumbersToGuess } from './validators/amount-of-numbers-to-guess-validator';
import { GameSessionFactory } from './factories/game-session-factory.service';
import { PlayerData } from '../player-data/models/playerData';

@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent {
  @Input()
  public playerData: PlayerData | undefined;

  @Output()
  public gameSettingsEventEmitter: EventEmitter<GameSession> = new EventEmitter<GameSession>();

  public gameSettingsForm: FormGroup;

  public constructor(private readonly formBuilder: FormBuilder,
                     private readonly gameSettingsFactory: GameSessionFactory) {
    this.gameSettingsForm = this.formBuilder.group({
      amountOfNumbersToGuess: new FormControl('', [Validators.required, validateAmountOfNumbersToGuess])
    });
  }

  public startNewGame() {
    if (this.playerData === undefined) {
      throw new Error('PlayerData is not defined!');
    }

    const gameSettings: GameSession = this.gameSettingsFactory.create(this.gameSettingsForm.value.amountOfNumbersToGuess, this.playerData);

    this.gameSettingsEventEmitter.emit(gameSettings);
  }
}
