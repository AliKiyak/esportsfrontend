import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(
    private readonly gameService: GameService,
    private route: ActivatedRoute
  ) {}

  games: any = [];
  gametitle = '';
  ngOnInit() {
    this.gameService.getGames().subscribe(result => {
      console.log(result);
      this.games = result;
    });
  }

  filterGames() {
    if (this.gametitle == '') {
      this.ngOnInit();
    } else {
      this.gameService.filterGames(this.gametitle).subscribe(
        result => this.games = result
      );
    }
  }

}
