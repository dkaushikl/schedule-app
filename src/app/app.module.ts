import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GamePage, TeamsPage, TeamDetailPage, TournamentsPage, StandingsPage, TeamHomePage, MyTeamsPage } from '../pages/pages';
import { EliteApi } from '../shared/shared';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    MyTeamsPage,
    StandingsPage,
    TeamHomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    MyTeamsPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EliteApi,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
