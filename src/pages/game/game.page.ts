import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail.page';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-game',
  templateUrl: 'game.page.html',
})
export class GamePage {
  public game: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  this.game = this.navParams.data;
  }

  teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId)
    this.navCtrl.push(TeamDetailPage, team);
  }
}
