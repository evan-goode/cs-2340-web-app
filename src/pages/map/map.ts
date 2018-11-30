import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    Marker,
    GoogleMapsAnimation,
    MyLocation
} from '@ionic-native/google-maps';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {
    map: GoogleMap;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.loadMap();
    }

    loadMap() {
        this.map = GoogleMaps.create('map_canvas', {
            camera: {
                target: {
                    lat: 33.7890,
                    lng: -84.3880
                },
                zoom: 11
            }
        });

    }

}
