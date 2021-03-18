import { NgModule } from '@angular/core';
import { NgbInputDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberGuessingGameComponent } from './number-guessing-game.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { BrowserModule } from '@angular/platform-browser';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NumberGuessingGameComponent,
    PlayerDataComponent,
    GameSetupComponent,
    PlayAreaComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
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
