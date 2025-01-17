import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

interface Facture {
  id: number;
  nom: string;
  statut: string;
  dateLimite: string;
  commission: string;
  commissionPayee: string;
  resteAPayer: string;
  pays: string;
}

@Component({
  selector: 'app-facture-pro',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTabsModule],
  templateUrl: './facture-pro.component.html',
  styleUrls: ['./facture-pro.component.css'],
})
export class FactureProComponent implements OnInit {
  showDetails: boolean = false;
  selectedStatut: string = "Vue d'ensemble"; // Valeur par défaut
  statutsFiltres: string[] = ["Vue d'ensemble", 'Hotellerrie', 'Tourisme'];
  selectedSousStatut: string = ''; // Initialiser comme une chaîne vide
  selectedPays: string = 'Tous les pays'; // Valeur par défaut
  paysFiltres: string[] = ['Tous les pays'];
  paidFactures: Facture[] = [];
  unpaidFactures: Facture[] = [];
  unavailableFactures: Facture[] = [];
  sousStatuts: { [key: string]: string[] } = {
    Hotellerrie: ['Hotel (s)', 'Motel (s)', 'Appartement (s)'],
    Tourisme: [
      'Autres',
      'Randonnés',
      'Parcs',
      'Campings',
      'Plages privées',
      'Maisons traditionnelles',
    ],
  };

  factures: Facture[] = [
    {
      nom: 'Facture A',
      statut: 'Payée',
      dateLimite: '2025-01-31',
      commission: '500.00',
      commissionPayee: '500.00',
      resteAPayer: '0.00',
      id: 1,
      pays: 'Senegal',
    },
    {
      nom: 'Facture B',
      statut: 'En attente',
      dateLimite: '2025-02-15',
      commission: '1000.00',
      commissionPayee: '700.00',
      resteAPayer: '300.00',
      id: 2,
      pays: 'RDC',
    },
    {
      nom: 'Facture C',
      statut: 'En retard',
      dateLimite: '2025-01-10',
      commission: '750.00',
      commissionPayee: '500.00',
      resteAPayer: '250.00',
      id: 3,
      pays: 'RDC',
    },
    {
      nom: 'Facture D',
      statut: 'Payée',
      dateLimite: '2025-01-20',
      commission: '1200.00',
      commissionPayee: '1200.00',
      resteAPayer: '0.00',
      id: 4,
      pays: 'Mali',
    },
    {
      nom: 'Facture E',
      statut: 'Partiellement payée',
      dateLimite: '2025-02-01',
      commission: '1500.00',
      commissionPayee: '1000.00',
      resteAPayer: '500.00',
      id: 5,
      pays: 'Gabon',
    },
  ];

  constructor() {
    // Initialiser le sous-statut en fonction du statut par défaut
    this.onStatutChange();
    this.initializeCountryFilters();
    this.paidFactures = this.factures.filter(
      (facture) => facture.statut === 'Payée'
    );
    this.unpaidFactures = this.factures.filter((facture) =>
      ['En attente', 'Partiellement payée'].includes(facture.statut)
    );
    this.unavailableFactures = this.factures.filter(
      (facture) => facture.statut === 'En retard'
    );
  }

  ngOnInit(): void {}

  onStatutChange() {
    // Réinitialiser la sélection du sous-statut lorsque le statut change
    this.selectedSousStatut = this.sousStatuts[this.selectedStatut]?.[0] || '';
  }

  initializeCountryFilters() {
    const uniqueCountries = new Set(
      this.factures.map((facture) => facture.pays)
    );
    this.paysFiltres.push(...Array.from(uniqueCountries));
  }

  afficherDetails(facture: Facture) {
    console.log('Détails de la facture:', facture);
    alert(`Détails de la facture ${facture.nom}`);
  }
}
