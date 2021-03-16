import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from './interfaces/userData';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {
  @Output()
  public userDataEventEmitter: EventEmitter<UserData> = new EventEmitter<UserData>();

  public userDateOfBirth: NgbDateStruct | undefined;
  public userName: string | undefined;
  public userForm: FormGroup;

  public constructor(private readonly formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      userDateOfBirth: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(): void {
    this.userDataEventEmitter.emit(this.userForm.value);
  }
}
