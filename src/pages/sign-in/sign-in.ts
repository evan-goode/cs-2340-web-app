import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import axios from 'axios';

import { MainPage } from '../main/main';

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
        const formData = new FormData();
        formData.set("src", "login");
        formData.set("user", this.username.value);
        formData.set("pass", this.password.value);
        axios({
            method: 'post',
            data: formData,
            url: 'https://ridgefieldttt.com/2340api.php'
        }).then(response => {
            console.log(response);
            if (response.data) {
                this.navCtrl.insert(0, MainPage).then(() => {
                    this.navCtrl.popToRoot();
                });
            } else {
                this.wrong = true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
