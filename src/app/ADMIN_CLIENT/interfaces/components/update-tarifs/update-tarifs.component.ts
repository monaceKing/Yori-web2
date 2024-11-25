import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-update-tarifs',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatDivider,
    FormsModule,
    CommonModule
  ],
  templateUrl: './update-tarifs.component.html',
  styleUrl: './update-tarifs.component.css'
})
export class UpdateTarifsComponent {

  somme: number = 0;
  pourcentage: number = 0;
  monnaie: string = 'FCFA'; // Valeur par défaut
  @Output() calculChange = new EventEmitter<{ somme: number; pourcentage: number; monnaie: string }>(); // Émet un objet

  calculerPourcentage() {
    this.pourcentage = this.somme * 0.15; // 15% de la somme
    console.log(`Somme: ${this.somme}, Pourcentage: ${this.pourcentage} ${this.monnaie}`);

    // Émettre un objet contenant la somme, le pourcentage et la monnaie
    this.calculChange.emit({ somme: this.somme, pourcentage: this.pourcentage, monnaie: this.monnaie });
  }
}
