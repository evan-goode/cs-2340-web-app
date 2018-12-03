import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { getLocations } from '../../model';

import { LocationPage } from '../location/location';

@Component({
    selector: 'page-location-list',
    templateUrl: 'location-list.html',
})

export class LocationListPage {
    locations: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        this.locations = [];
    }

    locationClick(location: any) {
        this.navCtrl.push(LocationPage, { locationId: location.id });
    }

    async loadLocations() {
        this.locations = await getLocations(this.http);
    }

    ionViewWillEnter() {
        this.loadLocations();
    }
}
