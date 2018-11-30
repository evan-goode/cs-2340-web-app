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
        axios.get("https://www.ridgefieldttt.com/2340api.php?src=locations").then(response => {
            console.log(response.json());
        }).catch(error => {
            console.log("error")
        });
    }
}
