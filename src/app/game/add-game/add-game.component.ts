import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

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
  constructor(private router: Router, private gameService: GameService, private afStorage: AngularFireStorage) { }

  ngOnInit() {
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

    this.gameService.addGame(this.gameForm.value).subscribe(
      result => { console.log(result); this.router.navigate(['/games']); }
    );

  }

}
