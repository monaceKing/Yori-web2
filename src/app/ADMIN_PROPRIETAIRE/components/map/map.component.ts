import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  template:
    '<div id="map" style="height: 400px; width: 95%; margin:auto;"></div>',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialisation de la carte
    const map = L.map('map').setView([48.8566, 2.3522], 13); // Coordonnées pour Paris

    // Ajout des tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Ajout d'un marqueur
    L.marker([48.8566, 2.3522])
      .addTo(map)
      .bindPopup('Voici votre localisation !')
      .openPopup();
  }
}
