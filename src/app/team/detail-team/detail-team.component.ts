import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {

  team: any = {};
  constructor(private teamService: TeamService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id =  this.route.snapshot.paramMap.get('teamid');

    this.teamService.getTeam(id).subscribe(
      result => this.team = result
    );
  }

}
