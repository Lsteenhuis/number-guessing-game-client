import { NgModule } from '@angular/core';
import { NgbInputDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberGuessingGameComponent } from './number-guessing-game.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { BrowserModule } from '@angular/platform-browser';
import { GameSetupComponent } from './game-setup/game-setup.component';

@NgModule({
  declarations: [
    NumberGuessingGameComponent,
    PlayerDataComponent,
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
