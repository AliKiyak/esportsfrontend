import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class PlayerService {
    constructor(private http: HttpClient) {}

    getPlayers(): Observable<Player[]>{
        return this.http.get<Player[]>('http://localhost:8050/player/players');
    }

    getPlayer(playerId) {
        return this.http.get<Player>('http://localhost:8050/player/detail/' + playerId);
    }

    addPlayer(player) {
        return this.http.post<any>('http://localhost:8050/player/addplayer', player);
    }

    filterPlayers(gamerTag) {
        return this.http.get<Player>('http://localhost:8050/player/players/filter/' + gamerTag);
    }

    deletePlayer(playerId) {
        return this.http.delete<any>('http://localhost:8050/player/deleteplayer/' + playerId);
    }

    getPlayersOfTeam(teamid) {
        return this.http.get<any>('http://localhost:8050/player/players/team/' + teamid);
    }
}
