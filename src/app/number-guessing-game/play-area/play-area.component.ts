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
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { GameSession } from '../game-setup/models/game-session';
import { validatePlayerInput } from './validators/player-input-validator';
import { GameSessionHttpService } from './services/game-session.http.service';

@Component({
  selector: 'play-area-app',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnInit, OnDestroy {
  @Input()
  public gameSession: GameSession | undefined;

  @Output()
  public startNewGameEventListener: EventEmitter<void> = new EventEmitter();

  public gameHint: string | undefined;
  public playerAnswerForm: FormGroup;

  private startOfGuessInMs: number = Date.now();

  public constructor(private readonly formBuilder: FormBuilder,
                     private readonly gameSessionHttpService: GameSessionHttpService) {
    this.playerAnswerForm = this.formBuilder.group({
      userInput: new FormControl('', [Validators.required])
    });
  }

  public ngOnInit() {
    if (!this.gameSession) {
      throw new Error('GameSession has not been set!');
    }

    console.log(`The answer is ${this.gameSession.answer}`);

    this.playerAnswerForm.setValidators(validatePlayerInput(this.gameSession.amountOfNumbersToGuess));
    this.gameHint = '*'.repeat(this.gameSession.amountOfNumbersToGuess);
  }

  public checkUserAnswer(): void {
    const userEntrySpeed: number = this.calculateUserEntrySpeed();
    this.gameSession?.addPlayerEntrySpeed(userEntrySpeed);

    const userInput: number = this.playerAnswerForm.value.userInput;
    this.gameHint = this.gameSession?.compareUserInputToAnswer(userInput);

    if (this.gameSession?.isSolved) {
      // todo is it okay if this post doesn't handle the promise?
      this.gameSessionHttpService.post(this.gameSession);
    } else {
      this.resetStartOfGuessInMs();
    }
  }

  public startNewGame(): void {
    this.startNewGameEventListener.emit();
  }

  private resetStartOfGuessInMs(): void {
    this.startOfGuessInMs = Date.now();
  }

  private calculateUserEntrySpeed(): number {
    const currentTimeInMs: number = Date.now();

    return currentTimeInMs - this.startOfGuessInMs;
  }

  public ngOnDestroy() {
    if (this.gameSession && !this.gameSession?.isSolved) {
      this.gameSessionHttpService.post(this.gameSession);
    }
  }
}
