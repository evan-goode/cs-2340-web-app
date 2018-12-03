import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { getLocation } from '../../model';

import { DonationPage } from '../donation/donation';
import { NewDonationPage } from '../new-donation/new-donation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
    loaded: any;
    locationId: any;
    location: any;
    searchResults: any;

    @ViewChild('searchText') searchText;
    @ViewChild('searchMethod') searchMethod;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        this.locationId = navParams.data.locationId;
        this.location = {};
        this.loaded = false;
        this.searchResults = null;
    }
    showNewDonation(location: any) {
        this.navCtrl.push(NewDonationPage, { location: location });
    }
    showDonationDetail(donation: any) {
        this.navCtrl.push(DonationPage, { donationId: donation.id });
    }
    search() {
        if (!this.searchText.value.length) return [];
        this.searchResults = this.location.donations.filter(donation => {
            return donation[this.searchMethod.value].toLowerCase().indexOf(this.searchText.value.toLowerCase()) !== -1;
        });
    }
    async loadLocation() {
        this.location = await getLocation(this.http, this.locationId);
        this.loaded = true;
    }
    ionViewWillEnter() {
        this.loadLocation();
    }
}
