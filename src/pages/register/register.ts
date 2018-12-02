import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
    }
    register() {
        //Make API call.
        this.http.post('https://ridgefieldttt.com/2340api.php', {
            dest: "register",
            user: this.username.value,
            pass: this.password.value,
            type: this.type.value
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
    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }
}
