import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private readonly gameService: GameService) { }

  games: any = [];
  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(
      result => { console.log(result); this.games = result; }
    );
  }

}
