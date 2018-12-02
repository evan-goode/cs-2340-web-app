import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { MainPage } from '../main/main';

@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {
    @ViewChild('username') username;
    @ViewChild('password') password;
    wrong: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignInPage');
    }
    signIn() {
        //Make API call.
        this.http.post('https://ridgefieldttt.com/2340api.php', {
            src: "login",
            user: this.username.value,
            pass: this.password.value
        }, {}).then(response => {
            if (response.data) {
                this.navCtrl.insert(0, MainPage).then(() => {
                    this.navCtrl.popToRoot();
                });
            } else {
                this.wrong = true;
            }
        }).catch(error => {
            this.wrong = true;
            console.log("error. "+JSON.stringify(error));
        });
    }
}
