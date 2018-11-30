import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocationPage } from '../location/location';

import axios from "axios";

@Component({
    selector: 'page-location-list',
    templateUrl: 'location-list.html',
})

export class LocationListPage {
    locations: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.locations = [];
    }

    locationClick(location: any) {
        this.navCtrl.push(LocationPage, { location });
    }

    parseCsv(csv: String) {
        const lines = response.data.split("\n");
        return lines.filter(line => line.length).map(line => {
            return line.split(",");
        });
    }

    async getLocations() {
        const locationResponse = await axios.get("https://www.ridgefieldttt.com/2340api.php?src=locations");
        const donationResponse = await axios.get("https://www.ridgefieldttt.com/2340api.php?src=donations");
        const locationEntries = parseCsv(locationsResponse);
        const donationEntries = parseCsv(donationsResponse);

        const createDonation = entry => ({
            item: entry[1],
            date: entry[2],
            location: entry[3],
            user: entry[4],
            fulldesc: entry[5],
            value: entry[6],
            category: entry[7],
        });

        this.locations = locationEntries.map(locationEntry => {
            const id = locationEntry[10];
            const donations = donationEntries.filter(donationEntry => (
                donationEntry[0] === id
            )).map(createDonation);
            return {
                id,
                donations,
                name: entry[0],
                type: entry[1],
                zip: entry[2],
                phone: entry[3],
                state: entry[4],
                address: entry[5],
                website: entry[6],
                latitude: entry[7],
                longitude: entry[8],
                city: entry[9],
            };
        });
    }

    ionViewWillEnter() {
        getLocations();
    }
}
