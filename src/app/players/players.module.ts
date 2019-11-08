import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DetailPlayerComponent } from './detail-player/detail-player.component';
import { PlayerComponent } from './players/player.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddPlayerComponent, DetailPlayerComponent, PlayerComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PlayersModule { }
