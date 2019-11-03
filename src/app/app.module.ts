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


const appRoutes = [
  {path: 'games', component: GameComponent},
  {path: 'games/detail/:gameid', component: DetailGameComponent},
  {path: 'games/addgame', component: AddGameComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'teams/:gameid', component: TeamComponent},
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
