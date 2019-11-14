import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from './tournament.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {


  name = '';
  tournaments: any = [];
  constructor(private route: ActivatedRoute,
              private tournamentService: TournamentService) { }

  ngOnInit() {
    const gameid = this.route.snapshot.paramMap.get('gameid');

    if (gameid == null) {
      this.tournamentService.getAllTournaments().subscribe(result => this.tournaments = result);
    } else {
      this.tournamentService.getGameTournaments(gameid).subscribe(result => this.tournaments = result);
    }
  }

  filter() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.tournamentService.filterTournaments(this.name).subscribe(result => this.tournaments = result);
    }
  }

  deleteTournament(tournamentId) {
    this.tournamentService.deleteTournament(tournamentId).subscribe(
      () => this.ngOnInit()
    );
  }
}
