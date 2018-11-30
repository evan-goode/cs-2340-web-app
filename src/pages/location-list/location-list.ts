import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocationPage } from '../location/location';

import axios from "axios";

@Component({
    selector: 'page-location-list',
    templateUrl: 'location-list.html',
})

const normalizePhone = (string: String) => {
    return `+1${string.split("").filter(character => !isNaN(character)).join(""))}`;
};

export class LocationListPage {
    locations: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.locations = [];
    }

    locationClick(location: any) {
        this.navCtrl.push(LocationPage, { location });
    }

    ionViewDidLoad() {
        axios.get("https://www.ridgefieldttt.com/2340api.php?src=locations").then(response => {
            const lines = response.data.split("\n");
            this.locations = lines.filter(line => line.length).map(line => {
                const split = line.split(",");
                return {
                    id: split[10],
                    name: split[0],
                    type: split[1],
                    zip: split[2],
                    phone: split[3],
                    normalizedPhone: normalizePhone(split[3]),
                    state: split[4],
                    address: split[5],
                    website: split[6],
                    latitude: split[7],
                    longitude: split[8],
                    city: split[9],
                };
            });
            console.log(this.locations);
        }).catch(error => {
            console.error(error);
        });
    }
}
