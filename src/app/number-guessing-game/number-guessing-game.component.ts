import { Component } from '@angular/core';
import { UserData } from './user-data/interfaces/userData';

@Component({
  selector: 'app-number-guessing-game',
  templateUrl: './number-guessing-game.component.html',
  styleUrls: ['./number-guessing-game.component.scss']
})
export class NumberGuessingGameComponent {
  public userData: UserData | undefined;

  public setUserData(userData: UserData) {
    this.userData = userData;
  }

  public isUserDataSet(): boolean {
    return this.userData === undefined;
  }
}
