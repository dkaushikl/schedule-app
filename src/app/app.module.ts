import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { GamePage, MyTeamsPage, StandingsPage, TeamDetailPage, TeamHomePage, TeamsPage, TournamentsPage } from '../pages/pages';
import { EliteApi, UserSettings } from '../shared/shared';
import { MyApp } from './app.component';

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
    IonicStorageModule.forRoot(),
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
    UserSettings,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
