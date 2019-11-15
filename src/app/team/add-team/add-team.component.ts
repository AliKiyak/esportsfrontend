import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  teamForm = new FormGroup({
    name: new FormControl(''),
    game: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.teamService.addTeam(this.teamForm.value).subscribe(
      result => { console.log(result); this.router.navigate(['/teams']); }
    );

  }

}
