import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-info-etablissement',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon
  ],
  templateUrl: './info-etablissement.component.html',
  styleUrl: './info-etablissement.component.css'
})
export class InfoEtablissementComponent {

  showDetails: boolean = false;
  afficherDetails() {
    this.showDetails = !this.showDetails;
  }

  status: string = 'actif'; // 'actif' pour Ouvert, 'inactif' pour Fermé
    showDetails2: boolean = false; // Pour afficher/masquer les options de statut

    afficherDetails2() {
        this.showDetails = !this.showDetails; // Bascule l'affichage des détails
    }


}
