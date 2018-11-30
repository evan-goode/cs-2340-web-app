import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocationListPage } from '../location-list/location-list';

@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignInPage');
    }
    signIn() {
        //Make API call.
        this.navCtrl.push(LocationListPage);
    }
}
