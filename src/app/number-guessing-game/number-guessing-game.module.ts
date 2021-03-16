import { NgModule } from '@angular/core';
import { NgbInputDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberGuessingGameComponent } from './number-guessing-game.component';
import { UserDataComponent } from './user-data/user-data.component';
import { BrowserModule } from '@angular/platform-browser';
import { GameSetupComponent } from './game-setup/game-setup.component';

@NgModule({
  declarations: [
    NumberGuessingGameComponent,
    UserDataComponent,
    GameSetupComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    NumberGuessingGameComponent
  ],
  providers: [
    NgbInputDatepickerConfig
  ]
})
export class NumberGuessingGameModule {
}
