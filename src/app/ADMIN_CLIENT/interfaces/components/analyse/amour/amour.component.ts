import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-amour',
  standalone: true,
  imports: [],
  templateUrl: './amour.component.html',
  styleUrl: './amour.component.css'
})
export class AmourComponent {
  public options: any;

  ngOnInit() {
    this.options = {
      chart: {
        type: 'spline', // Type de graphique linéaire
        zoomType: 'x' // Permet le zoom sur l'axe X
      },
      title: {
        text: ''
      },
      yAxis: {
        title: { text: '' }
      },
      xAxis: {
        title: { text: '' },
        categories: ['10PM', '12PM', '14PM', '16PM', '18PM', '20PM'] // Catégories pour l'axe X
      },
      series: [
        {
          name: 'Asie',
          data: [500, 700, 300, 800, 650, 900], // Données variées pour créer des courbes serpentines
          color: '#FF4D50',
          marker: {
            enabled: true // Affiche les points de données
          }
        },
        {
          name: 'Europe',
          data: [300, 400, 450, 450, 500, 400], // Données variées pour la deuxième série
          color: '#77B5FE',
          marker: {
            enabled: true // Affiche les points de données
          }
        }
      ],
      tooltip: {
        shared: true,
        valueSuffix: ' visiteurs' // Suffixe pour les valeurs affichées dans les infobulles
      }
    };

    Highcharts.chart('container', this.options);
  }
}
 