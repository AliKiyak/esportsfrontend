import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams: any = [];
  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {}
  teamtitle = '';

  ngOnInit() {
    const gameid = this.route.snapshot.paramMap.get('gameid');

    if (gameid == null) {
      this.teamService.getTeams().subscribe(result => (this.teams = result));
    } else {
      this.teamService.getTeamOfGame(gameid).subscribe(result => this.teams = result);
    }
  }
  filterTeams() {
    if (this.teamtitle == '') {
      this.ngOnInit();
    } else {
      this.teamService.filterTeams(this.teamtitle).subscribe(
        result => this.teams = result
      );
    }
  }
  filterTeams() {
    if (this.teamtitle == '') {
      this.ngOnInit();
    } else {
      this.teamService.filterTeams(this.teamtitle).subscribe(
        result => this.teams = result
      );
    }
  }
}
