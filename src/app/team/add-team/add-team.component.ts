import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  team: any = {};
  buttontext = 'Add team';
  id = '';
  constructor(private router: Router, private teamService: TeamService, private gameService: GameService,
              private afStorage: AngularFireStorage, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('teamid');

    if (this.id !== null || this.id !== '' ) {
      this.teamService.getTeam(this.id).subscribe(
        result => {this.team = result; this.fillForm(); this.buttontext = 'Edit team'; }
      );
    }
    this.gameService.getGames().subscribe(
      result => this.games = result
    );
  }
  async onPictureChange(event) {
    this.profilePicture = <File>event.target.files[0];
    this.teamForm.patchValue({imageUrl: null});
  }

  async onSubmit() {
    if (this.teamForm.get('imageUrl').value === null) {

    const filePath = `${this.basePath}/${this.profilePicture.name}`;

    // uploads the image into the Firebase storage server
    const task = await this.afStorage.upload(filePath, this.profilePicture);

    // gets back the uploaded image in a URL
    this.url =  await task.ref.getDownloadURL();

    this.teamForm.controls['imageUrl'].setValue(this.url);

    }

    if (this.id === null || this.id === '') {
    this.teamService.addTeam(this.teamForm.value).subscribe(
      result => { console.log(result); this.router.navigate(['/teams']); }
    );
    } else {
      this.teamService.editTeam(this.id, this.teamForm.value).subscribe(
        result => { console.log(result); this.router.navigate(['/teams']); }
      );
    }

  }

  fillForm() {
    this.teamForm.patchValue({
      name: this.team.name,
      gameId: this.team.gameId,
      imageUrl: this.team.imageUrl,
      owner: this.team.owner,
      description: this.team.description,
    });
  }

}
