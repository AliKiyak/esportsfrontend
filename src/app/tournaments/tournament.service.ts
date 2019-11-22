import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  getAllTournaments() {
    return this.http.get<any>('http://localhost:8762/esportsapi/tournament/tournaments');
  }

  getGameTournaments(gameid) {
    return this.http.get<any>('http://localhost:8762/esportsapi/tournament/tournaments/game/' + gameid);
  }

  getDetailTournament(tournamentid) {
    return this.http.get<any>('http://localhost:8762/esportsapi/tournament/detail/' + tournamentid);
  }

  addTournament(tournament) {
    return this.http.post<any>('http://localhost:8762/esportsapi/tournament/addtournament', tournament);
  }

  filterTournaments(name) {
    return this.http.get<any>('http://localhost:8762/esportsapi/tournament/tournaments/filter/' + name);
  }

  deleteTournament(tournamentId) {
    return this.http.delete<any>('http://localhost:8762/esportsapi/tournament/deletetournament/' + tournamentId);
  }
}
