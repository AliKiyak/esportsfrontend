import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  getAllTournaments() {
    return this.http.get<any>('http://localhost:8050/tournament/tournaments');
  }

  getGameTournaments(gameid) {
    return this.http.get<any>('http://localhost:8050/tournament/tournaments/game/' + gameid);
  }

  getDetailTournament(tournamentid) {
    return this.http.get<any>('http://localhost:8050/tournament/detail/' + tournamentid);
  }
}
