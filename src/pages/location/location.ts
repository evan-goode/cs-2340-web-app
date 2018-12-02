import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
    location: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
        console.log(navParams);
        this.location = navParams.data.location;
    }
    ionViewWillEnter() {
        this.http.get("https://www.ridgefieldttt.com/2340api.php", { src: "donations" }, {}).then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    }
    showDonationDetail(donation: any) {
        this.navCtrl.push(DonationPage, { donation });
    }
}
