import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import axios from "axios";

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

    ionViewWillEnter() {
        axios.get("https://www.ridgefieldttt.com/2340api.php?src=donations").then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    }

}
