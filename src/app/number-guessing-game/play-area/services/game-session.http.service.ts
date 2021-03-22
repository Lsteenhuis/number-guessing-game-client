import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameSessionExport } from '../../game-setup/interfaces/game-session-export';
import { GameSession } from '../../game-setup/models/game-session';

@Injectable({
  providedIn: 'root'
})
export class GameSessionHttpService {
  public constructor(private httpClient: HttpClient) {
  }

  public post(gameSessionExport: GameSessionExport): Promise<any> {
    console.log(`Posting GameSession: '${gameSessionExport.id}' to the API.`);

    return this.httpClient.post('/gameMetaData', gameSessionExport).toPromise();
  }
}
