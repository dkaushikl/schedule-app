import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StandingsPage } from '../standings/standings.page';
import { TeamDetailPage } from '../team-detail/team-detail.page';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.page.html',
})

export class TeamHomePage {
  public team: any = {};
  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
}
