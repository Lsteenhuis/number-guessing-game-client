export interface GameSessionExport {
  id: string;
  isSolved: boolean;
  userName: string;
  amountOfNumbersToGuess: number;
  amountOfGuessed: number;
  entrySpeedInMs: number[];
}
