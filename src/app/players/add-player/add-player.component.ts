import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { TeamService } from 'src/app/team/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  teams: any = [];
  playerForm: FormGroup;
  id = '';
  buttontext = 'Add game';
  player: any = {};

  constructor(private router: Router, private _playerService: PlayerService,
              private afStorage: AngularFireStorage, private _teamService: TeamService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('playerid');

    if (this.id !== null || this.id !== '' ) {
      this._playerService.getPlayerWithTeamAndTeammembers(this.id).subscribe(
        result => {this.player = result; this.fillForm(); this.buttontext = 'Edit player'; }
      );
    }
    this._teamService.getTeams().subscribe(result => {
      this.teams = result;
    });

    this.playerForm = new FormGroup({
      gamerTag: new FormControl(''),
      realName: new FormControl(''),
      age: new FormControl(''),
      teamId: new FormControl(''),
      mouse: new FormControl(''),
      mousepad: new FormControl(''),
      headset: new FormControl(''),
      keyboard: new FormControl(''),
      picture: new FormControl(''),
    });
  }

  profilePicture: File = null;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  private basePath = "/players";
  url: any;

  async onPictureChange(event) {
    this.profilePicture = <File>event.target.files[0];
    this.playerForm.patchValue({picture: null});

  }

  fillForm() {
    this.playerForm.patchValue({
      gamerTag: this.player.gamerTag,
      realName: this.player.realName,
      age: this.player.age,
      team: this.player.team,
      mouse: this.player.mouse,
      mousepad: this.player.mousepad,
      headset: this.player.headset,
      keyboard: this.player.keyboard,
      picture: this.player.picture,
    })
  }

  async onSubmit() {
    if (this.playerForm.get('picture').value === null) {
    // image path on Firebase storage server
    const filePath = `${this.basePath}/${this.profilePicture.name}`;

    // uploads the image into the Firebase storage server
    const task = await this.afStorage.upload(filePath, this.profilePicture);

    // gets back the uploaded image in a URL
    this.url = await task.ref.getDownloadURL();

    this.playerForm.controls['picture'].setValue(this.url);
    }

    if (this.id === null || this.id === '') {
    this._playerService.addPlayer(this.playerForm.value).subscribe(result => {
      this.router.navigate(['/players']);
    });
  } else {
    this._playerService.editPlayer(this.id, this.playerForm.value).subscribe(
      () =>   this.router.navigate(['/players'])
    );
  }
  }

  changeTeam(e) {
    this.playerForm.controls['teamId'].setValue(e);
  }

}
