import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent implements OnInit {

  game: any = {};
  constructor(private gameService: GameService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id =  this.route.snapshot.paramMap.get('gameid');

    this.gameService.getGame(id).subscribe(
      result => this.game = result
    );
  }

}
