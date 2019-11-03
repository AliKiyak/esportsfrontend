import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

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
  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.gameService.addGame(this.gameForm.value).subscribe(
      result => { console.log(result); this.router.navigate(['/games']); }
    );

  }

}
