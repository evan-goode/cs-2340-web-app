import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import axios from "axios";

@Component({
    selector: 'page-location-list',
    templateUrl: 'location-list.html',
})
export class LocationListPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        const request = await axios.get("https://www.ridgefieldttt.com/2340api.php", {src: "locations"});
        const json = await request.json();
        console.log(json);
        console.log('ionViewDidLoad LocationListPage');
    }
}
