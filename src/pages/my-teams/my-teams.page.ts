import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments.page';
import { TeamHomePage } from '../team-home/team-home.page';
import { EliteApi, UserSettings } from '../../shared/shared';

@Component({
  selector: 'page-myteams',
  templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {
  favorites = [];

  constructor(private loadingController: LoadingController, public navCtrl: NavController, private eliteApi: EliteApi,
    private userSettings: UserSettings) {
  }

  ionViewDidEnter() {
    this.favorites = this.userSettings.getAllFavorites();
  }

  favoriteTapped(favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }
}
