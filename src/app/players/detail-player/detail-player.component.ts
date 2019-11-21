import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from '../player.service';
import { PlayerDetail } from 'src/app/models/player-detail.model';


@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.scss']
})
export class DetailPlayerComponent implements OnInit {

  player: PlayerDetail;

  constructor(private _playerService: PlayerService, private route: ActivatedRoute) {
    const id =  this.route.snapshot.paramMap.get('playerId');

    this._playerService.getPlayerWithTeamAndTeammembers(id).subscribe(result => {
      this.player = result;
    })
   }

  ngOnInit() {
  }

  

}
