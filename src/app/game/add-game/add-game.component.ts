import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  gameForm = new FormGroup({
    title: new FormControl(''),
    creator: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
  });
  profilePicture: File = null;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  private basePath = '/games';
  url: any;
  game: any = {};
  buttontext = 'Add game';
  id = '';
  constructor(private router: Router, private gameService: GameService, private afStorage: AngularFireStorage, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('gameid');

    if (this.id !== null || this.id !== '' ) {
      this.gameService.getGame(this.id).subscribe(
        result => {this.game = result; this.fillForm(this.game);
                   console.log(this.gameForm.value);
                   this.buttontext = 'Edit game'; }
      );
    }
  }

  async onPictureChange(event) {
    this.profilePicture = <File>event.target.files[0];
    this.gameForm.patchValue({imageUrl: null});
  }
  async onSubmit() {
    if (this.gameForm.get('imageUrl').value === null) {
    const filePath = `${this.basePath}/${this.profilePicture.name}`;

    // uploads the image into the Firebase storage server
    const task = await this.afStorage.upload(filePath, this.profilePicture);

    // gets back the uploaded image in a URL
    this.url =  await task.ref.getDownloadURL();
    this.gameForm.controls['imageUrl'].setValue(this.url);
    }


    if (this.id === null || this.id === '') {
      this.gameService.addGame(this.gameForm.value).subscribe(
        result => { console.log(result); this.router.navigate(['/games']); }
      );
    } else {
      this.gameService.editGame(this.id, this.gameForm.value).subscribe(
        result => {this.router.navigate(['games']);}
      );
    }


  }

  fillForm(game: any) {
    this.gameForm.patchValue({
      title: this.game.title,
      creator: this.game.creator,
      imageUrl: this.game.imageUrl,
      description: this.game.description,
    });
  }

}
