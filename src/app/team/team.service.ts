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

  getTeam(teamId) {
    return this.http.get<any>('http://localhost:8050/team/detail/' + teamId);
  }
  getTeamOfGame(gameId) {
    return this.http.get<any>('http://localhost:8050/team/game/' + gameId);
  }
  addTeam(team) {
    return this.http.post<any>('http://localhost:8050/team/addteam', team);
  }
  filterTeams(title) {
    return this.http.get<any>('http://localhost:8050/team/teams/filter/' + title);
  }

  deleteTeam(id) {
    return this.http.delete<any>('http://localhost:8050/team/delete/' + id);
  }
}
