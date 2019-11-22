import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';
import { PlayerDetail } from '../models/player-detail.model';

@Injectable({
    providedIn: 'root'
  })
export class PlayerService {
    constructor(private http: HttpClient) {}

    getPlayers(): Observable<Player[]>{
        return this.http.get<Player[]>('http://localhost:8762/esportsapi/player/players');
    }

    getPlayerWithTeamAndTeammembers(playerId) {
        return this.http.get<PlayerDetail>('http://localhost:8762/esportsapi/player/detail/' + playerId);
    }

    addPlayer(player) {
        return this.http.post<any>('http://localhost:8762/esportsapi/player/addplayer', player);
    }

    filterPlayers(gamerTag) {
        return this.http.get<Player>('http://localhost:8762/esportsapi/player/players/filter/' + gamerTag);
    }

    deletePlayer(playerId) {
        return this.http.delete<any>('http://localhost:8762/esportsapi/player/deleteplayer/' + playerId);
    }

    getPlayersOfTeam(teamid) {
        return this.http.get<any>('http://localhost:8762/esportsapi/player/players/team/' + teamid);
    }
    editPlayer(playerid, player) {
        return this.http.put<any>('http://localhost:8762/esportsapi/player/editplayer/' + playerid, player);
    }
}
