import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

// Interface pour les options du graphique
interface ChartOptions {
    chart: {
        type: string;
        zoomType: string;
    };
    title: {
        text: string;
    };
    yAxis: {
        title: {
            text: string;
        };
    };
    xAxis: {
        categories: string[];
    };
    series: Highcharts.SeriesOptionsType[]; // Utilisation du type approprié pour les séries
    tooltip: {
        shared: boolean;
        valueSuffix: string;
    };
}


@Component({
  selector: 'app-fransda',
  standalone: true,
  imports: [],
  templateUrl: './fransda.component.html',
  styleUrl: './fransda.component.css'
})
export class FransdaComponent implements OnInit {
    public options!: Highcharts.Options;

    
    constructor(private cdr: ChangeDetectorRef) {}

  
    ngOnInit() {
      this.options = {
        chart: {
          type: 'spline',
        },
        title: {
          text: '',
        },
        yAxis: {
          title: { text: '' },
        },
        xAxis: {
          categories: ['10PM', '12PM', '14PM', '16PM', '18PM', '20PM'],
        },
        series: [
          {
            name: 'Jour',
            data: [500, 700, 300, 800, 650, 900],
            color: '#FF4D50',
            type: 'spline',
          } as Highcharts.SeriesSplineOptions, // Assurez-vous de typer chaque série
          {
            name: 'Semaine',
            data: [300, 400, 450, 450, 500, 400],
            color: '#77B5FE',
            type: 'spline',
          } as Highcharts.SeriesSplineOptions,
          {
            name: 'Mois',
            data: [6000, 7000, 8000, 7500, 9000, 8500],
            color: '#FFD700',
            type: 'spline',
          } as Highcharts.SeriesSplineOptions,
          {
            name: 'Année',
            data: [70000, 80000, 75000, 90000, 85000, 95000],
            color: '#32CD32',
            type: 'spline',
          } as Highcharts.SeriesSplineOptions,
        ],
        tooltip: {
          shared: true,
          valueSuffix: ' visiteurs',
        },
      };
  
      // Créer le graphique
      setTimeout(() => {
        Highcharts.chart('container', this.options);
      });


    //   this.cdr.detectChanges(); // Déclenche la détection des changements
      
    }
}