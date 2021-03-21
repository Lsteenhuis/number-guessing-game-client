import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameSessionExport } from '../../game-setup/interfaces/game-session-export';

@Injectable({
  providedIn: 'root'
})
export class GameSessionHttpService {
  public constructor(private httpClient: HttpClient) {
  }

  public post(gameSessionExport: GameSessionExport): Promise<any> {
    return this.httpClient.post('/gameMetaData', gameSessionExport).toPromise();
  }
}
