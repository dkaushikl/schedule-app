import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { StandingsPage } from '../standings/standings';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})

export class TeamHomePage {
  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
