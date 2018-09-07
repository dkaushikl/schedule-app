import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams.page';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html',
})
export class TournamentsPage {
  public tournaments: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi,
    public loading: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loading.create({
      content: 'Getting tournaments...',
      spinner: 'dots'
    })

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
  }

  itemTapped(tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }
}
