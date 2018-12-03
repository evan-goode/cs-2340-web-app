import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps } from "@ionic-native/google-maps";
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { RegisterPage } from '../pages/register/register';
import { DonationPage } from '../pages/donation/donation';
import { LocationListPage } from '../pages/location-list/location-list';
import { LocationPage } from '../pages/location/location';
import { MainPage } from '../pages/main/main';
import { MapPage } from '../pages/map/map';
import { NewDonationPage } from '../pages/new-donation/new-donation';

const pages = [
    MyApp,
    HomePage,
    SignInPage,
    RegisterPage,
    DonationPage,
    LocationListPage,
    LocationPage,
    MainPage,
    MapPage,
    NewDonationPage,
];

@NgModule({
  declarations: pages.slice(),
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: pages.slice(),
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
