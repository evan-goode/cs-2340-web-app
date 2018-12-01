import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import axios from 'axios';

import { MainPage } from '../main/main';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    @ViewChild('username') username;
    @ViewChild('password') password;
    @ViewChild('type') type;
    wrong: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    register() {
        //Make API call.
        const formData = new FormData();
        formData.set("dest", "register");
        formData.set("user", this.username.value);
        formData.set("pass", this.password.value);
        formData.set("type", this.type.value);
        console.log("type beast: "+this.type.value);
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
    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }
}
