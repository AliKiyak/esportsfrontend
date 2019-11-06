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

  constructor(private _playerService: PlayerService, private route: ActivatedRoute) { 

    this._playerService.getPlayers().subscribe(result => {
      this.players = result;
    })
  }

  ngOnInit() {
  }

  players: Player[] = [];

}
