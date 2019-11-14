import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/models/player.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  players: any = [];
  gamertag = '';
  constructor(private _playerService: PlayerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._playerService.getPlayers().subscribe(result => {
      this.players = result;
    });
  }

  filterPlayers() {
    if (this.gamertag == '') {
      this.ngOnInit();
    } else {
      this._playerService.filterPlayers(this.gamertag).subscribe(
        result => this.players = result
      );
    }
  }

  deletePlayer(playerid) {
    this._playerService.deletePlayer(playerid).subscribe(
      () => this.ngOnInit()
    );
  }
}
