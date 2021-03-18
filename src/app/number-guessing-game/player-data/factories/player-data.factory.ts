import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { PlayerData } from '../models/playerData';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataFactory {
  public create(userName: string, dateOfBirth: NgbDate): PlayerData {
    return new PlayerData(userName, this.dateToString(dateOfBirth));
  }

  private dateToString(date: NgbDate): string {
    return `${date.day}/${date.month}/${date.year}`;
  }
}
