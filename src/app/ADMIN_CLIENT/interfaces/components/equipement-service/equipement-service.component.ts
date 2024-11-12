import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-equipement-service',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './equipement-service.component.html',
  styleUrl: './equipement-service.component.css'
})
export class EquipementServiceComponent {
    // Liste des éléments à afficher avec des checkboxes
    items = [
      { name: 'Restaurant', selected: false },
      { name: 'Service d`\'étage', selected: false },
      { name: 'Bar', selected: false },
      { name: 'Réception ouverte 24h/24', selected: false },
      { name: 'Sauna', selected: false },
      { name: 'Centre de remise en forme', selected: false },
      { name: 'Jardin', selected: false },
      { name: 'Terrasse', selected: false },
      { name: 'Chambres non-fumeurs', selected: false },
      { name: 'Chambres fumeurs', selected: false },
      { name: 'Navette aéroport', selected: false },
      { name: 'Chambres familiales', selected: false },
      { name: 'Spa et centre de bien-être', selected: false },
      { name: 'Bain à remous/jacuzzi', selected: false },
      { name: 'Connexion Wi-Fi gratuite', selected: false },
      { name: 'Climatisation', selected: false },
      { name: 'Parc aquatique', selected: false },
      { name: 'Borne de recharge pour les véhicules électriques', selected: false },
      { name: 'Piscine', selected: false },
      { name: 'Plage', selected: false },
    ];

    languageItems = [
      { name: 'Français', selected: false },
      { name: 'Anglais', selected: false },
      { name: 'Espagnol', selected: false },
      { name: 'Italien', selected: false },
      { name: 'Portugais', selected: false },
      { name: 'deutsch', selected: false },
    ];

    // Variable pour la recherche
    searchTerm: string = '';

    // Propriété pour les boutons radio
    ouiNonSelected: string = ''; // "oui" ou "non"
    selectedRadio1: string = '';
    selectedRadio2: string = '';
    selectedRadio3: string = '';
    selectedRadio4: string = '';
    selectedRadio5: string = '';
    selectedRadio6: string = '';
    selectedRadio7: string = '';
    selectedRadio8: string = '';

    // Object pour gérer les options de petit-déjeuner
  breakfastOptions = {
    A_la_carte: false,
    Africain: false,
    Americain: false,
    Asiatique: false,
    Buffet: false,
    Petit_dejeuner_a_emporter : false,
    Continental: false,
    Végétalien: false,
    Casher: false,
    Végétarien : false,
    Sans_gluten: false,
    Halal: false,
    Anglais_ou_irlandais_complet : false,
  };
    // Propriétés pour gérer les heures d'arrivée et de départ
    arrivalStart: string = '';  // Heure de début d'arrivée
    arrivalEnd: string = '';    // Heure de fin d'arrivée
    departureStart: string = '';  // Heure de début de départ
    departureEnd: string = '';    // Heure de fin de départ

    // Déclarez un objet paymentMethods
    paymentMethods = {
    visa: false,
    Paiement_digital: false,
    Paysing: false,
    Ebilling: false
    };

    // Méthode pour filtrer les éléments en fonction du terme de recherche
    get filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }


    get filterLanguage() {
      return this.languageItems.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Méthode pour gérer la sélection des checkboxes
    onCheckboxChange(item: any) {
      item.selected = !item.selected;
    }

    onCheckboxChange2(item: any) {
      item.selected = !item.selected;
    }

    // Méthode pour basculer l'état des options de petit-déjeuner
    toggleBreakfastOption(option: keyof typeof this.breakfastOptions) {
    this.breakfastOptions[option] = !this.breakfastOptions[option];
  }


}
