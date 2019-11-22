import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<any>('http://localhost:8762/esportsapi/game/games');
  }

  getGame(gameId) {
    return this.http.get<any>('http://localhost:8762/esportsapi/game/detail/' + gameId);
  }

  addGame(game) {
    return this.http.post<any>('http://localhost:8762/esportsapi/game/addgame', game);
  }

  filterGames(title) {
    return this.http.get<any>('http://localhost:8762/esportsapi/game/games/filter/' + title);
  }

  deleteGame(gameId) {
    return this.http.delete<any>('http://localhost:8762/esportsapi/game/deletegame/' + gameId);
  }
  editGame(gameId, game) {
    return this.http.put<any>('http://localhost:8762/esportsapi/game/editgame/' + gameId, game);
  }
}
