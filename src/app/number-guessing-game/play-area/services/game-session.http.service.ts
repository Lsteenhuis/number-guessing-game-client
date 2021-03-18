import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { GameSessionExport } from '../../game-setup/interfaces/game-session-export';

@Injectable({
  providedIn: 'root'
})
export class GameSessionHttpService {
  public constructor(private httpClient: HttpClient) {
  }

  public post(gameSessionExport: GameSessionExport): Promise<any> {
    return this.httpClient.post(`${environment.SERVER_URL}/gameSession`, gameSessionExport).toPromise();
  }
}
