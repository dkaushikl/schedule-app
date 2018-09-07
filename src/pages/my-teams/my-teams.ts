import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

@Component({
  selector: 'page-myteams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  constructor(public navCtrl: NavController) {

  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }
}
