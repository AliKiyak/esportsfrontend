import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get<any>('http://localhost:8050/team/teams');
  }

  getTeamOfGame(gameId) {
    return this.http.get<any>('http://localhost:8050/team/game/' + gameId);
  }
}
