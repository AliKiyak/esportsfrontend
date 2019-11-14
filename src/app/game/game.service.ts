import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<any>('http://localhost:8050/game/games');
  }

  getGame(gameId) {
    return this.http.get<any>('http://localhost:8050/game/detail/' + gameId);
  }

  addGame(game) {
    return this.http.post<any>('http://localhost:8050/game/addgame', game);
  }

  filterGames(title) {
    return this.http.get<any>('http://localhost:8050/game/games/filter/' + title);
  }

  deleteGame(gameId) {
    return this.http.delete<any>('http://localhost:8050/game/deletegame/' + gameId);
  }
}
