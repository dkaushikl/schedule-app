import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Events, LoadingController, Nav, Platform } from 'ionic-angular';
import { MyTeamsPage, TeamHomePage, TournamentsPage } from '../pages/pages';
import { EliteApi, UserSettings } from '../shared/shared';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favouriteTeams: any[];
  rootPage: any = MyTeamsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(private events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private userSettings: UserSettings, private loadingController: LoadingController, private eliteApi: EliteApi) {
    this.initializeApp();
    this.pages = [
      { title: 'MyTeams', component: MyTeamsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavourites();

      this.events.subscribe('favorites:changed', () => {
        this.refreshFavourites()
      });
    });
  }

  refreshFavourites() {
    this.favouriteTeams = this.userSettings.getAllFavorites();
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

  goToHome() {
    this.nav.push(MyTeamsPage);
  }

  goToTeam(favorite) {
    let loader = this.loadingController.create({
      content: 'Getting Data...',
      dismissOnPageChange: true
    })
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(l => this.nav.push(TeamHomePage, favorite.team));
  }
}
