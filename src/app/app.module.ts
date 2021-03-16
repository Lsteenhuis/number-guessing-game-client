import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberGuessingGameModule } from './number-guessing-game/number-guessing-game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NumberGuessingGameModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
