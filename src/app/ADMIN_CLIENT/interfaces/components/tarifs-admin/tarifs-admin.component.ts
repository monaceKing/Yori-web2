import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tarif',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatDivider,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tarifs-admin.component.html',
  styleUrl: './tarifs-admin.component.css'
})
export class TarifsAdminComponent {


  somme: number = 0;
  pourcentage: number = 0;
  monnaie: string = 'F CFA'; // Valeur par défaut
  @Output() calculChange = new EventEmitter<{ somme: number; pourcentage: number; monnaie: string }>(); // Émet un objet

  calculerPourcentage() {
    this.pourcentage = this.somme * 0.15; // 15% de la somme
    console.log(`Somme: ${this.somme}, Pourcentage: ${this.pourcentage} ${this.monnaie}`);

    // Émettre un objet contenant la somme, le pourcentage et la monnaie
    this.calculChange.emit({ somme: this.somme, pourcentage: this.pourcentage, monnaie: this.monnaie });
  }


}
