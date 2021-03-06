import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { getDonation } from '../../model';

@Component({
    selector: 'page-donation',
    templateUrl: 'donation.html',
})
export class DonationPage {
    loaded: any;
    donationId: any;
    donation: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        this.donationId = navParams.data.donationId;
        this.donation = {};
        this.loaded = false;
    }

    async loadDonation() {
        this.donation = await getDonation(this.http, this.donationId);
        this.loaded = true;
    }

    ionViewDidLoad() {
        this.loadDonation();
    }
}
