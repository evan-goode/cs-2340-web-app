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
import axios from "axios";

@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {
    map: GoogleMap;
    locations: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.getLocations();
    }

    parseCsv(csv: String) {
        const lines = csv.split("\n");
        return lines.filter(line => line.length).map(line => {
            return line.split(",");
        });
    }

    getLocations() {
        axios.get("https://www.ridgefieldttt.com/2340api.php?src=locations").then(response => {
            let locationEntries = this.parseCsv(response.data);
            this.locations = locationEntries.map(locationEntry => {
                const id = parseInt(locationEntry[10]);
                console.log({id});
                return {
                    id,
                    name: locationEntry[0],
                    type: locationEntry[1],
                    zip: locationEntry[2],
                    phone: locationEntry[3],
                    state: locationEntry[4],
                    address: locationEntry[5],
                    website: locationEntry[6],
                    latitude: locationEntry[7],
                    longitude: locationEntry[8],
                    city: locationEntry[9],
                };
            });
            this.loadMap();
        });
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
        this.locations.forEach(location => {
            this.map.addMarkerSync({
                title: location.name,
                snippet: 'Phone: '+location.phone,
                position: {
                    lat: location.latitude,
                    lng: location.longitude
                },
                animation: GoogleMapsAnimation.BOUNCE
            });
        });
    }

}
