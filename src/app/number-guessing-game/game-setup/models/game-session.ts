import { GameHints } from '../enums/game-hints';

export class GameSession {
  private _isSolved: boolean = false;
  private readonly _answer: string;

  public constructor(private _id: string,
                     private _amountOfNumbersToGuess: number) {
    this._answer = this.generateRandomNumber(_amountOfNumbersToGuess);
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

  public compareUserInputToAnswer(userInputNumber: number): string {
    const gameHints: GameHints[] = this.createHintString(userInputNumber);
    this.checkIfGameIsSolved(gameHints);

    return gameHints.join(' ');
  }

  private generateRandomNumber(amountOfNumbers: number): string {
    let numberString: string = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < amountOfNumbers; i++) {
      numberString += Math.floor(Math.random() * 9);
    }

    return numberString;
  }

  private createHintString(userInputNumber: number): GameHints[] {
    const hintArray: GameHints[] = [];
    const answerString: string[] = [...this.answer];
    const userInputString: string[] = [...userInputNumber.toString()];

    userInputString.forEach((guessedNumber: string) => {
      if (!answerString.includes(guessedNumber)) {
        hintArray.push(GameHints.MINE);
      } else if (answerString.indexOf(guessedNumber) === userInputString.indexOf(guessedNumber)) {
        hintArray.push(GameHints.BOAT);
      } else {
        hintArray.push(GameHints.BUOY);
      }
    });

    return hintArray;
  }

  private checkIfGameIsSolved(gameHints: GameHints[]): void {
    this._isSolved = gameHints.every((gameHint) => gameHint === GameHints.BOAT);
  }
}
