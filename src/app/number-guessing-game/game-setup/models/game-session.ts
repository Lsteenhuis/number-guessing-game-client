import { GameHints } from '../enums/game-hints';
import { PlayerData } from '../../player-data/models/playerData';
import { GameMetaData } from './game-meta-data';

export class GameSession {
  private _isSolved: boolean = false;
  private _gameMetaData: GameMetaData = new GameMetaData();

  public constructor(private _id: string,
                     private _amountOfNumbersToGuess: number,
                     private _answer: string,
                     private _player: PlayerData) {
  }

  public get answer(): string {
    return this._answer;
  }

  public get id(): string {
    return this._id;
  }

  public get amountOfNumbersToGuess(): number {
    return this._amountOfNumbersToGuess;
  }

  public get isSolved(): boolean {
    return this._isSolved;
  }

  public get playerData(): PlayerData {
    return this._player;
  }

  public addPlayerEntrySpeed(value: number): void {
    this._gameMetaData.addEntrySpeedToList(value);
  }

  public compareUserInputToAnswer(userInputNumber: number): string {
    this._gameMetaData.incrementGuessesByOne();

    const gameHints: GameHints[] = this.createHintString(userInputNumber);
    this.checkIfGameIsSolved(gameHints);

    return gameHints.join(' ');
  }

  private createHintString(userInputNumber: number): GameHints[] {
    const hintArray: GameHints[] = [];
    const userInputString: string[] = [...userInputNumber.toString()];

    for (let i = 0; i < this._amountOfNumbersToGuess; i++) {
      const currentUserNumber: string = userInputString[i];
      const currentAnswerNumber: string = this.answer[i];

      if (!this.answer.includes(currentUserNumber)) {
        hintArray.push(GameHints.MINE);
      } else if (currentAnswerNumber === currentUserNumber) {
        hintArray.push(GameHints.BOAT);
      } else {
        hintArray.push(GameHints.BUOY);
      }
    }

    return hintArray;
  }

  private checkIfGameIsSolved(gameHints: GameHints[]): void {
    this._isSolved = gameHints.every((gameHint) => gameHint === GameHints.BOAT);
  }
}
