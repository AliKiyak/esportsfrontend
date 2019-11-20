import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TournamentService } from '../tournament.service';
import { GameService } from 'src/app/game/game.service';
import { TeamService } from 'src/app/team/team.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {

  games: any = [];
  teams: any = [];
  teamStrings: any = [];

  gameForm = new FormGroup({
    name: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
    gameId: new FormControl(''),
  });

  profilePicture: File = null;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  private basePath = '/tournaments';
  url: any;

  constructor(private tournamentService: TournamentService, private gameService: GameService, 
              private teamService: TeamService, private router: Router,
              private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(
      result => this.games = result
    );
  }

  gameChanged() {
    this.teamService.getTeamOfGame(this.gameForm.get('gameId').value).subscribe(
      result => { this.teams = result; this.teamStrings = []; }
    );
  }

  teamCheckboxChanged(teamid: string) {
    if (this.teamStrings.includes(teamid) === true) {
      this.teamStrings.splice(this.teamStrings.indexOf(teamid), 1);
    } else {
      this.teamStrings.push(teamid);
    }

    console.log(this.teamStrings);
  }


  async onPictureChange(event) {
    this.profilePicture = <File>event.target.files[0];
  }
  async onSubmit() {

    const filePath = `${this.basePath}/${this.profilePicture.name}`;

    // uploads the image into the Firebase storage server
    const task = await this.afStorage.upload(filePath, this.profilePicture);

    // gets back the uploaded image in a URL
    this.url =  await task.ref.getDownloadURL();

    this.gameForm.controls['imageUrl'].setValue(this.url);
    const data  = Object.assign({}, this.gameForm.value, {teams: this.teamStrings});

    this.tournamentService.addTournament(data).subscribe(
      () => this.router.navigate(['tournaments'])
    );
  }

}
