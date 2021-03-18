export interface GameSessionExport {
  id: string;
  isSolved: boolean;
  amountOfNumbersToGuess: number;
  amountOfGuesses: number;
  entrySpeedInMs: number[];
}
