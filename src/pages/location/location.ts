import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

    location: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(navParams);
        this.location = navParams.data.location;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LocationPage');
    }

}
