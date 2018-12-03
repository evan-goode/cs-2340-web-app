import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { newDonation } from "../../model";

@Component({
    selector: 'page-new-donation',
    templateUrl: 'new-donation.html',
})
export class NewDonationPage {
    location: any;

    @ViewChild('item') item;
    @ViewChild('user') user;
    @ViewChild('date') date;
    @ViewChild('fullDescription') fullDescription;
    @ViewChild('value') value;
    @ViewChild('category') category;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        this.location = navParams.data.location;
    }

    async createDonation() {
        await newDonation(this.http, {
            locationId: this.location.id,
            locationName: this.location.name,
            item: this.item.value,
            user: this.user.value,
            date: this.date.value,
            fullDescription: this.fullDescription.value,
            value: this.value.value,
            category: this.category.value,
        });
        this.navCtrl.pop();
    }

    ionViewDidLoad() {}
}
