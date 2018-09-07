import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  public team: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**nav params', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

}
