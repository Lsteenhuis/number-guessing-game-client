import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { PlayerData } from './models/playerData';
import { PlayerDataFactory } from './factories/player-data.factory';

@Component({
  selector: 'player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent {
  @Output()
  public playerDataEventEmitter: EventEmitter<PlayerData> = new EventEmitter<PlayerData>();

  public minDate = {
    year: 1900,
    month: 1,
    day: 1
  };

  public playerDataForm: FormGroup;

  public constructor(private readonly formBuilder: FormBuilder,
                     private readonly playerDataFactory: PlayerDataFactory) {
    this.playerDataForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      userDateOfBirth: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(): void {
    const playerData: PlayerData = this.playerDataFactory.create(
      this.playerDataForm.value.userName,
      this.playerDataForm.value.userDateOfBirth);

    this.playerDataEventEmitter.emit(playerData);
  }
}
