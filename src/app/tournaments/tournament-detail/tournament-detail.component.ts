import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {


  tournament: any = {};
  constructor(private tournamentService: TournamentService, private route: ActivatedRoute) { }

  ngOnInit() {
    const tournamentid  = this.route.snapshot.paramMap.get('tournamentid');

    this.tournamentService.getDetailTournament(tournamentid).subscribe(
      result => this.tournament = result
    );
  }

}
