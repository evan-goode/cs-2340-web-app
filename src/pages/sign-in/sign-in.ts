import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import axios from 'axios';

import { LocationListPage } from '../location-list/location-list';

@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {
    @ViewChild('username') username;
    @ViewChild('password') password;
    wrong: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignInPage');
    }
    signIn() {
        //Make API call.
        axios.post('https://ridgefieldttt.com/2340api.php', {
            src: 'login',
            user: this.username.value,
            pass: this.password.value
        }).then(function(response) {
            console.log(response.data);
            if (response.data === "true") {
                this.navCtrl.push(LocationListPage);
            } else {
                console.log("This didn't work "+response.data);
                this.wrong = true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
