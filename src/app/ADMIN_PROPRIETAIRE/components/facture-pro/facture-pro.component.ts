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
  showDetails: boolean = true;
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
      commission: '500.00 FCFA',
      commissionPayee: '500.00 FCFA',
      resteAPayer: '0.00 FCFA',
      id: 1,
      pays: 'Senegal',
    },
    {
      nom: 'Facture B',
      statut: 'En attente',
      dateLimite: '2025-02-15',
      commission: '1000.00 FCFA',
      commissionPayee: '700.00 FCFA',
      resteAPayer: '300.00 FCFA',
      id: 2,
      pays: 'RDC',
    },
    {
      nom: 'Facture C',
      statut: 'En retard',
      dateLimite: '2025-01-10',
      commission: '750.00 FCFA',
      commissionPayee: '500.00 FCFA',
      resteAPayer: '250.00 FCFA',
      id: 3,
      pays: 'RDC',
    },
    {
      nom: 'Facture D',
      statut: 'Payée',
      dateLimite: '2025-01-20',
      commission: '1200.00 FCFA',
      commissionPayee: '1200.00 FCFA',
      resteAPayer: '0.00 FCFA',
      id: 4,
      pays: 'Mali',
    },
    {
      nom: 'Facture E',
      statut: 'Partiellement payée',
      dateLimite: '2025-02-01',
      commission: '1500.00 FCFA',
      commissionPayee: '1000.00 FCFA',
      resteAPayer: '500.00 FCFA',
      id: 5,
      pays: 'Gabon',
    },
    {
      nom: 'Facture F',
      statut: 'Partiellement payée',
      dateLimite: '2025-02-01',
      commission: '1500.00 FCFA',
      commissionPayee: '1000.00 FCFA',
      resteAPayer: '500.00 FCFA',
      id: 6,
      pays: 'South Africa',
    },
    {
      nom: 'Facture G',
      statut: 'Payée',
      dateLimite: '2025-01-05',
      commission: '2000.00 FCFA',
      commissionPayee: '2000.00 FCFA',
      resteAPayer: '0.00 FCFA',
      id: 7,
      pays: 'Ivory Coast',
    },
    {
      nom: 'Facture H',
      statut: 'En retard',
      dateLimite: '2025-02-10',
      commission: '500.00 FCFA',
      commissionPayee: '300.00 FCFA',
      resteAPayer: '200.00 FCFA',
      id: 8,
      pays: 'Nigeria',
    },
    {
      nom: 'Facture I',
      statut: 'En attente',
      dateLimite: '2025-03-01',
      commission: '1800.00 FCFA',
      commissionPayee: '800.00 FCFA',
      resteAPayer: '1000.00 FCFA',
      id: 9,
      pays: 'Togo',
    },
    {
      nom: 'Facture J',
      statut: 'Payée',
      dateLimite: '2025-01-12',
      commission: '3000.00 FCFA',
      commissionPayee: '3000.00 FCFA',
      resteAPayer: '0.00 FCFA',
      id: 10,
      pays: 'Benin',
    },
    {
      nom: 'Facture K',
      statut: 'En attente',
      dateLimite: '2025-02-28',
      commission: '1000.00 FCFA',
      commissionPayee: '0.00 FCFA',
      resteAPayer: '1000.00 FCFA',
      id: 11,
      pays: 'Guinea',
    },
    {
      nom: 'Facture L',
      statut: 'En retard',
      dateLimite: '2025-01-25',
      commission: '2500.00 FCFA',
      commissionPayee: '1500.00 FCFA',
      resteAPayer: '1000.00 FCFA',
      id: 12,
      pays: 'Cameroon',
    },
    {
      nom: 'Facture M',
      statut: 'Payée',
      dateLimite: '2025-02-05',
      commission: '4000.00 FCFA',
      commissionPayee: '4000.00 FCFA',
      resteAPayer: '0.00 FCFA',
      id: 13,
      pays: 'Senegal',
    },
    {
      nom: 'Facture N',
      statut: 'Partiellement payée',
      dateLimite: '2025-02-15',
      commission: '3500.00 FCFA',
      commissionPayee: '2000.00 FCFA',
      resteAPayer: '1500.00 FCFA',
      id: 14,
      pays: 'Burkina Faso',
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
    this.filterFacturesByCountry(); // Appliquer les filtres au démarrage
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

  // Filtrer les factures en fonction du pays sélectionné
  filterFacturesByCountry() {
    const country = this.selectedPays;

    this.paidFactures = this.factures.filter(
      (facture) =>
        facture.statut === 'Payée' &&
        (country === 'Tous les pays' || facture.pays === country)
    );

    this.unpaidFactures = this.factures.filter(
      (facture) =>
        ['En attente', 'Partiellement payée'].includes(facture.statut) &&
        (country === 'Tous les pays' || facture.pays === country)
    );

    this.unavailableFactures = this.factures.filter(
      (facture) =>
        facture.statut === 'En retard' &&
        (country === 'Tous les pays' || facture.pays === country)
    );
  }

  // Méthode appelée lors du changement de pays
  onCountryChange() {
    this.filterFacturesByCountry(); // Réappliquer les filtres
  }
  getTotalPaid(): number {
    return this.paidFactures.length;
  }

  getTotalUnpaid(): number {
    return this.unpaidFactures.length;
  }

  getTotalUnavailable(): number {
    return this.unavailableFactures.length;
  }
}
