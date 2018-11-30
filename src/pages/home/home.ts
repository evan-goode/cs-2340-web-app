import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignInPage } from '../sign-in/sign-in';
import { RegisterPage } from '../register/register';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController) {

    }
    signIn() {
        this.navCtrl.push(SignInPage);
    }
    register() {
        this.navCtrl.push(RegisterPage);
    }
}
