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
  OnInit,
  Output
} from '@angular/core';
import { GameSession } from '../game-setup/models/game-session';
import { validatePlayerInput } from './validators/player-input-validator';

@Component({
  selector: 'play-area-app',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnInit {
  @Input()
  public gameSession: GameSession | undefined;

  @Output()
  public startNewGameEventListener: EventEmitter<void> = new EventEmitter();

  public gameHint: string | undefined;
  public playerAnswerForm: FormGroup;

  public constructor(private readonly formBuilder: FormBuilder) {
    this.playerAnswerForm = this.formBuilder.group({
      userInput: new FormControl('', [Validators.required])
    });
  }

  public ngOnInit() {
    if (this.gameSession === undefined) {
      throw new Error('GameSession has not been set!');
    }

    console.log(`The answer is ${this.gameSession.answer}`);

    this.playerAnswerForm.setValidators(validatePlayerInput(this.gameSession.amountOfNumbersToGuess));
    this.gameHint = '*'.repeat(this.gameSession.amountOfNumbersToGuess);
  }

  public get playerDateOfBirth(): string {
    return <string> this.gameSession?.player.userDateOfBirth;
  }

  public checkUserAnswer(): void {
    const userInput: number = this.playerAnswerForm.value.userInput;

    this.gameHint = this.gameSession?.compareUserInputToAnswer(userInput);
  }

  public startNewGame(): void {
    this.startNewGameEventListener.emit();
  }
}
