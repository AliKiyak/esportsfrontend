import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { GameService} from '../../game/game.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

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
  profilePicture: File = null;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  private basePath = '/teams';
  url: any;
  constructor(private router: Router, private teamService: TeamService, private gameService: GameService,
              private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(
      result => this.games = result
    );
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

    this.teamForm.controls['imageUrl'].setValue(this.url);

    this.teamService.addTeam(this.teamForm.value).subscribe(
      result => { console.log(result); this.router.navigate(['/teams']); }
    );

  }

}
