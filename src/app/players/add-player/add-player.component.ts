import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/models/player.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'
import { TeamService } from 'src/app/team/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  teams: any = [];

  constructor(private router: Router, private _playerService: PlayerService, private afStorage: AngularFireStorage, private _teamService: TeamService ) { 
  }

  ngOnInit() {
    this._teamService.getTeams().subscribe(result => {
      this.teams = result;
    })
  }

  playerForm = new FormGroup({
    gamerTag: new FormControl(''),
    realName: new FormControl(''),
    age: new FormControl(''),
    team: new FormControl(''),
    mouse: new FormControl(''),
    mousepad: new FormControl(''),
    headset: new FormControl(''),
    keyboard: new FormControl(''),
    picture: new FormControl(''),
  });

  profilePicture: File = null;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  private basePath = "/players";
  url: any;

  async onPictureChange(event) {
    this.profilePicture = <File>event.target.files[0];
  }

  async onSubmit() {
    // image path on Firebase storage server
    const filePath = `${this.basePath}/${this.profilePicture.name}`;

    // uploads the image into the Firebase storage server
    const task = await this.afStorage.upload(filePath, this.profilePicture);

    // gets back the uploaded image in a URL
    this.url = await task.ref.getDownloadURL();

    this.playerForm.controls['picture'].setValue(this.url);
     
    this._playerService.addPlayer(this.playerForm.value).subscribe(result => {
      console.log(this.playerForm.value);
      this.router.navigate(['/players']);
    });
  }

  changeTeam(e) {
    // this.playerForm.controls['team'].setValue(e.target.value);
    console.log(e);
  }

}
