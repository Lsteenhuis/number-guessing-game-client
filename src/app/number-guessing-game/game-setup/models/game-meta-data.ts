export class GameMetaData {
  private _amountOfGuesses: number = 0;
  private _entrySpeedInMs: number[] = []

  public get amountOfGuesses(): number {
    return this._amountOfGuesses;
  }

  public incrementGuessesByOne(): void {
    this._amountOfGuesses++;
  }

  public get entrySpeedInMs(): number[] {
    return this._entrySpeedInMs;
  }

  public addEntrySpeedToList(value: number): void {
    this._entrySpeedInMs.push(value);
  }
}
