import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Markserice } from 'src/app/services/map.services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  constructor(private markerService: Markserice) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeMarker(this.map);
  } 
 
  private initMap(): void{

    this.map = L.map('map').setView([4.7286125,-74.0730415], 10);
    
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    tiles.addTo(this.map);

 
  }

}
