import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameSession } from '../../game-setup/models/game-session';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameSessionHttpService {
  public constructor(private httpClient: HttpClient) {
  }

  public post(gameSession: GameSession): Promise<any> {
    return this.httpClient.post(`${environment.SERVER_URL}/game/meta-data`, gameSession).toPromise();
  }
}
