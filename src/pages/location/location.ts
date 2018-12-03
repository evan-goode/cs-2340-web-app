import { Component } from '@angular/core';
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
    locationId: any;
    location: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        this.locationId = navParams.data.locationId;
        this.location = {};
    }
    showNewDonation(location: any) {
        this.navCtrl.push(NewDonationPage, { locationId: location.id });
    }
    showDonationDetail(donation: any) {
        this.navCtrl.push(DonationPage, { donationId: donation.id });
    }
    async loadLocation() {
        this.location = await getLocation(this.http, this.locationId);
    }
    ionViewWillEnter() {
        this.loadLocation();
    }
}
