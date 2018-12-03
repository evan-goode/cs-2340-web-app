import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { getLocations } from '../../model';

import { LocationPage } from '../location/location';
import { DonationPage } from '../donation/donation';

@Component({
    selector: 'page-location-list',
    templateUrl: 'location-list.html',
})

export class LocationListPage {
    loaded: any;
    locations: any;
    searchResults: any;

    @ViewChild('searchText') searchText;
    @ViewChild('searchMethod') searchMethod;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        this.loaded = false;
        this.locations = [];
        this.searchResults = null;
    }
    donationClick(donation: any) {
        this.navCtrl.push(DonationPage, { donationId: donation.id });
    }
    locationClick(location: any) {
        this.navCtrl.push(LocationPage, { locationId: location.id });
    }

    search() {
        if (!this.searchText.value.length) return [];
        const allDonations = [].concat(...(this.locations.map(location => location.donations)));
        this.searchResults = allDonations.filter(donation => {
            return donation[this.searchMethod.value].toLowerCase().indexOf(this.searchText.value.toLowerCase()) !== -1;
        });
    }

    async loadLocations() {
        this.locations = await getLocations(this.http);
        this.loaded = true;
    }

    ionViewWillEnter() {
        this.loadLocations();
    }
}
