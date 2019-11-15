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
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentDetailComponent } from './tournaments/tournament-detail/tournament-detail.component';
import { DetailTeamComponent } from './team/detail-team/detail-team.component';
import { AddTournamentComponent } from './tournaments/add-tournament/add-tournament.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AddTeamComponent} from './team/add-team/add-team.component';



const appRoutes = [
  {path: 'games', component: GameComponent},
  {path: 'games/detail/:gameid', component: DetailGameComponent},
  {path: 'games/addgame', component: AddGameComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'teams/:gameid', component: TeamComponent},
  {path: 'teams/detail/:teamid', component: DetailTeamComponent},
  {path: 'team/addteam', component: AddTeamComponent},
  {path: 'players', component: PlayerComponent},
  {path: 'player/detail/:playerId', component: DetailPlayerComponent},
  {path: 'players/addplayer', component: AddPlayerComponent},
  {path: 'tournaments', component: TournamentsComponent},
  {path: 'tournaments/game/:gameid', component: TournamentsComponent},
  {path: 'tournament/detail/:tournamentid', component: TournamentDetailComponent},
  {path: 'tournament/addtournament', component: AddTournamentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TeamComponent,
    DetailGameComponent,
    DetailTeamComponent,
    AddGameComponent,
    TournamentsComponent,
    TournamentDetailComponent,
    AddTournamentComponent,
    AddTeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PlayersModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
