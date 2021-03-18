import { GameHints } from '../enums/game-hints';
import { PlayerData } from '../../player-data/models/playerData';

export class GameSession {
  private _isSolved: boolean = false;

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

  public set id(value: string) {
    this._id = value;
  }

  public get amountOfNumbersToGuess(): number {
    return this._amountOfNumbersToGuess;
  }

  public set amountOfNumbersToGuess(value: number) {
    this._amountOfNumbersToGuess = value;
  }

  public get isSolved(): boolean {
    return this._isSolved;
  }

  public get player(): PlayerData {
    return this._player;
  }

  public compareUserInputToAnswer(userInputNumber: number): string {
    const gameHints: GameHints[] = this.createHintString(userInputNumber);
    this.checkIfGameIsSolved(gameHints);

    return gameHints.join(' ');
  }

  private createHintString(userInputNumber: number): GameHints[] {
    const hintArray: GameHints[] = [];
    const answerString: string[] = [...this.answer];
    const userInputString: string[] = [...userInputNumber.toString()];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this._amountOfNumbersToGuess; i++) {
      const currentUserNumber: string = userInputString[i];
      const currentAnswerNumber: string = answerString[i];

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
