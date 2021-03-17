import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerData } from './interfaces/playerData';

@Component({
  selector: 'player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent {
  @Output()
  public playerDataEventEmitter: EventEmitter<PlayerData> = new EventEmitter<PlayerData>();

  public playerDataForm: FormGroup;

  public constructor(private readonly formBuilder: FormBuilder) {
    this.playerDataForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      userDateOfBirth: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(): void {
    this.playerDataEventEmitter.emit(this.playerDataForm.value);
  }
}
