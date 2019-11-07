import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  constructor(private router: Router, private _playerService: PlayerService ) { }

  ngOnInit() {
  }

  playerForm = new FormGroup({
    gamerTag: new FormControl(''),
    realName: new FormControl(''),
    age: new FormControl(''),
    mouse: new FormControl(''),
    mousepad: new FormControl(''),
    headset: new FormControl(''),
    keyboard: new FormControl(''),
  });

  onSubmit() {
    this._playerService.addPlayer(this.playerForm.value).subscribe(result => {
      this.router.navigate(['/players']);
    });
  }

}
