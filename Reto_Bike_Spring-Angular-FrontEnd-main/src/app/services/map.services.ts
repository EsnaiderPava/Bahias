import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as L from "leaflet";


@Injectable({
    providedIn: 'root'
})

export class Markserice {

    baseUrl: string = 'http://localhost:8080/data';

    constructor(private http: HttpClient){
    }

    makeMarker(map: L.Map): void {
        this.http.get(this.baseUrl).subscribe((res: any) => {

            for(const c of res){
                const lat = c.coordinates[0];
                const lon = c.coordinates[1];
                const marker = L.marker([lon, lat]).addTo(map);
                marker.bindPopup(`<center>
                                  <p>
                                    <strong>${c.name}</strong>
                                  </p>
                                  </center>
                                  <img style="max-width: -webkit-fill-available;" src="${c.image}"/
                                  ><br />
                                  <p>${c.description}</p> 
                                `).openPopup();
            }

        });
    }

}
