import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-etablissement',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './info-etablissement.component.html',
  styleUrl: './info-etablissement.component.css'
})
export class InfoEtablissementComponent {

  showDetails: boolean = false;
  afficherDetails() {
    this.showDetails = !this.showDetails;
  }


}
