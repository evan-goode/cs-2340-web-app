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
        this.map.addMarkerSync({
            title: 'AFD Station 3',
            snippet: 'Phone: (404) 555 - 3456',
            position: {
                lat: 33.75416,
                lng: -84.37742
            },
            animation: GoogleMapsAnimation.BOUNCE
        });
        this.map.addMarkerSync({
            title: 'BOYS & GIRLS CLUB W.W. WOOLFOLK',
            snippet: 'Phone: (404) 555 - 1234',
            position: {
                lat: 33.73182,
                lng: -84.43971
            },
            animation: GoogleMapsAnimation.BOUNCE
        });
        this.map.addMarkerSync({
            title: 'PATHWAY UPPER ROOM CHRISTIAN MINISTRIES',
            snippet: 'Phone: (404) 555 - 5432',
            position: {
                lat: 33.70866,
                lng: -84.41853
            },
            animation: GoogleMapsAnimation.BOUNCE
        });
    }

}
