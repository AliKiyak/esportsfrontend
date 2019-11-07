import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { DetailGameComponent } from './game/detail-game/detail-game.component';
import { AddGameComponent } from './game/add-game/add-game.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PlayersModule } from './players/players.module';
import { PlayerComponent } from './players/players/player.component';
import { DetailPlayerComponent } from './players/detail-player/detail-player.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';


const appRoutes = [
  {path: 'games', component: GameComponent},
  {path: 'games/detail/:gameid', component: DetailGameComponent},
  {path: 'games/addgame', component: AddGameComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'teams/:gameid', component: TeamComponent},
  {path: 'players', component: PlayerComponent},
  {path: 'player/detail/:playerId', component: DetailPlayerComponent},
  {path: 'players/addplayer', component: AddPlayerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TeamComponent,
    DetailGameComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
