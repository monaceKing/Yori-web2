import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

export interface Etablissement {
  statut: 'hôtellerie' | 'tourisme';
  nom: string;
  pays: 'Gabon' | 'Sénégal' | 'Kenya' | 'RDC';
  nombreReservations: {
      jour: number;
      semaine: number;
      mois: number;
      annee: number;
  };
  nombreReservationsAnnulees: {
      jour: number;
      semaine: number;
      mois: number;
      annee: number;
  };
  montantReservations: {
      jour: number;
      semaine: number;
      mois: number;
      annee: number;
  };
  montantCommissions: {
      jour: number;
      semaine: number;
      mois: number;
      annee: number;
  };
}


@Component({
  selector: 'app-analyse-pro',
  standalone: true,
  imports: [
    CommonModule,
    MatTabGroup,
    MatTab,
    MatTableModule,
    FormsModule
  ],
  templateUrl: './analyse-pro.component.html',
  styleUrl: './analyse-pro.component.css'
})
export class AnalyseProComponent implements OnInit {
  public etablissements: Etablissement[] = [];

   // Variables pour stocker les totaux
    totalReservationsJour = 0;
    totalMontantJour = 0;

    totalReservationsSemaine = 0;
    totalMontantSemaine = 0;

    totalReservationsMois = 0;
    totalMontantMois = 0;

    totalReservationsAnnee = 0;
    totalMontantAnnee = 0;

    selectedStatut = '';
    selectedPays = '';

     // Définition des options pour le filtre
     statuts = ['hôtellerie', 'tourisme'];
     paysList = ['Gabon', 'Sénégal', 'Kenya', 'RDC'];

    private filterSubject = new BehaviorSubject<void>(undefined); // BehaviorSubject pour le debounce
    ngOnInit(): void {
      this.etablissements = [
        {
            statut: 'hôtellerie',
            nom: 'Hotel Paradis',
            pays: 'Gabon',
            nombreReservations: { jour: 5, semaine: 30, mois: 100, annee: 1200 },
            nombreReservationsAnnulees: { jour: 1, semaine: 3, mois: 10, annee: 50 },
            montantReservations: { jour: 500, semaine: 3000, mois: 10000, annee: 120000 },
            montantCommissions: { jour: 50, semaine: 300, mois: 1000, annee: 12000 }
        },
        {
            statut: 'hôtellerie',
            nom: 'Radisson Blu Okoume Palace Hotel',
            pays: 'Gabon',
            nombreReservations: { jour: 8, semaine: 40, mois: 150, annee: 1800 },
            nombreReservationsAnnulees: { jour: 2, semaine: 5, mois: 15, annee: 70 },
            montantReservations: { jour: 800, semaine: 4000, mois: 12000, annee: 144000 },
            montantCommissions: { jour: 80, semaine: 400, mois: 1200, annee: 14400 }
        },
        {
            statut: 'hôtellerie',
            nom: 'Hotel Fly Gabon',
            pays: 'Gabon',
            nombreReservations: { jour: 6, semaine: 35, mois: 120, annee: 1500 },
            nombreReservationsAnnulees: { jour: 1, semaine: 4, mois: 12, annee: 60 },
            montantReservations: { jour: 600, semaine: 3500, mois: 11000, annee: 130000 },
            montantCommissions: { jour: 60, semaine: 350, mois: 1100, annee: 13000 }
        },
        {
            statut: 'tourisme',
            nom: 'Hotel du Lion',
            pays: 'Sénégal',
            nombreReservations: { jour: 10, semaine: 50, mois: 200, annee: 2400 },
            nombreReservationsAnnulees: { jour: 3, semaine: 6, mois: 20, annee: 90 },
            montantReservations: { jour: 1000, semaine: 5000, mois: 20000, annee: 240000 },
            montantCommissions: { jour: 100, semaine: 500, mois: 2000, annee: 24000 }
        },
        {
            statut:'tourisme',
            nom:'Mövenpick Hotel Abidjan',
            pays:'RDC',
            nombreReservations:{jour :7 ,semaine :42 ,mois :150 ,annee :1800},
            nombreReservationsAnnulees:{jour :2 ,semaine :4 ,mois :14 ,annee :80},
            montantReservations:{jour :700 ,semaine :4200 ,mois :15000 ,annee :180000},
            montantCommissions:{jour :70 ,semaine :420 ,mois :1500 ,annee :18000}
        },
        {
            statut:'hôtellerie',
            nom:'Hotel Kenya',
            pays:'Kenya',
            nombreReservations:{jour :5 ,semaine :40 ,mois :148 ,annee :1800},
            nombreReservationsAnnulees:{jour :2 ,semaine :4 ,mois :14 ,annee :80},
            montantReservations:{jour :700 ,semaine :4200 ,mois :15000 ,annee :180000},
            montantCommissions:{jour :70 ,semaine :420 ,mois :1500 ,annee :18000}
        },
        {
            statut:'hôtellerie',
            nom:'Azalaï Hotel Dakar',
            pays:'Sénégal',
            nombreReservations:{jour :12 ,semaine :60 ,mois :250 ,annee :3000},
            nombreReservationsAnnulees:{jour :4 ,semaine :8 ,mois :25 ,annee :120},
            montantReservations:{jour :1200 ,semaine :6000 ,mois :25000 ,annee :300000},
            montantCommissions:{jour :120 ,semaine :600 ,mois :2500 ,annee :30000}
        }
    ];

    this.calculateTotals(); // Calcul initial des totaux

    // Écoutez les changements dans le sujet de filtre
    this.filterSubject.pipe(debounceTime(1)).subscribe(() => {
        this.calculateTotals(); // Recalculez les totaux après le délai
    });
    
    }

    calculateTotals() {
      const filteredEtablissements = this.applyFilters(); // Appliquez les filtres ici

      // Calcul des totaux
      this.totalReservationsJour = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.jour, 0);
      this.totalMontantJour = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.jour, 0);

      this.totalReservationsSemaine = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.semaine, 0);
      this.totalMontantSemaine = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.semaine, 0);

      this.totalReservationsMois = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.mois, 0);
      this.totalMontantMois = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.mois, 0);

      this.totalReservationsAnnee = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.nombreReservations.annee, 0);
      this.totalMontantAnnee = filteredEtablissements.reduce((acc, etablissement) => acc + etablissement.montantReservations.annee, 0);
  }

    
  applyFilters() {
    return this.etablissements.filter(etablissement => {
        const matchesStatut = !this.selectedStatut || etablissement.statut === this.selectedStatut;
        const matchesPays = !this.selectedPays || etablissement.pays === this.selectedPays;
        return matchesStatut && matchesPays;
    });
}

onFilterChange() {
    this.filterSubject.next(); // Émettez un événement lorsque le filtre change
}


  
}
