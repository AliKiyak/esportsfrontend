import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { GameService} from '../../game/game.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  teams: any = [];
  games: any = [];
  teamForm = new FormGroup({
    name: new FormControl(''),
    gameId: new FormControl(''),
    imageUrl: new FormControl(''),
    owner: new FormControl(''),
    description: new FormControl(''),

  });
  constructor(private router: Router, private teamService: TeamService, private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(
      result => this.games = result
    );
  }
  onSubmit() {
    this.teamService.addTeam(this.teamForm.value).subscribe(
      result => { console.log(result); this.router.navigate(['/teams']); }
    );

  }

}
