import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LocationListPage } from '../location-list/location-list';

@Component({
    selector: 'page-main',
    templateUrl: 'main.html',
})
export class MainPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MainPage');
    }
    viewLocations() {
        this.navCtrl.push(LocationListPage);
    }
    viewMap() {
        //Wei ting...
    }
    logOut() {
        this.navCtrl.insert(0, HomePage).then(() => {
            this.navCtrl.popToRoot();
        });
    }
}
