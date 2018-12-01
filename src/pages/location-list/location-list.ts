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
        const lines = csv.data.split("\n");
        return lines.filter(line => line.length).map(line => {
            return line.split(",");
        });
    }

    async getLocations() {
        const locationResponse = await axios.get("https://www.ridgefieldttt.com/2340api.php?src=locations");
        const donationResponse = await axios.get("https://www.ridgefieldttt.com/2340api.php?src=donations");
        const locationEntries = this.parseCsv(locationResponse);
        const donationEntries = this.parseCsv(donationResponse);

        const createDonation = entry => ({
            item: entry[1],
            date: entry[2],
            location: entry[3],
            user: entry[4],
            fulldesc: entry[5],
            value: entry[6],
            category: entry[7],
        });
        console.log(donationResponse);
        console.log(donationEntries);

        this.locations = locationEntries.map(locationEntry => {
            const id = parseInt(locationEntry[10]);
            console.log({id});
            console.log({donationEntries});
            const donations = donationEntries.filter(donationEntry => {
                return parseInt(donationEntry[0]) === id;
            }).map(createDonation);
            return {
                id,
                donations,
                name: locationEntry[0],
                type: locationEntry[1],
                zip: locationEntry[2],
                phone: locationEntry[3],
                state: locationEntry[4],
                address: locationEntry[5],
                website: locationEntry[6],
                latitude: locationEntry[7],
                longitude: locationEntry[8],
                city: locationEntry[9],
            };
        });
    }

    ionViewWillEnter() {
        console.log("entered");
        this.getLocations();
    }
}
