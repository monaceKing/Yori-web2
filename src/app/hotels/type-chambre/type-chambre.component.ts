import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent, MatCardTitleGroup, MatCardSubtitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel, MatHint, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-type-chambre',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatRadioGroup,
    MatRadioButton,
    MatDivider,
    MatSelectModule,
    MatCardTitleGroup,
    CommonModule

  ],
  templateUrl: './type-chambre.component.html',
  styleUrl: './type-chambre.component.css'
})
export class TypeChambreComponent implements OnInit {
  constructor() {}

  productQuantities: number[] = [0, 0, 0, 0, 0, 0, 0, 0]; // Ajoute autant d'éléments que nécessaire
  lits = [
    { name: 'lit simple', size: '90-130 cm de large' },
    { name: 'lit double', size: '131-150 cm de large' },
    { name: 'lit King-Size', size: '151-180 cm' },
    { name: 'grand lit King-Size', size: '181-210 cm' },
    { name: 'lit superposé', size: 'Dimensions variables' },
    { name: 'Dimensions variables', size: 'Dimensions variables' },
    { name: 'futon', size: 'Dimensions variables' },
    // Ajoute d'autres lits ici si nécessaire
  ];

  ngOnInit(): void {}

  quantity(value: string, index: number) {
    if (value === 'max') {
      this.productQuantities[index] += 1; // Incrémente le nombre pour ce type de lit
    } else if (value === 'min' && this.productQuantities[index] > 1) {
      this.productQuantities[index] -= 1; // Décrémente uniquement si le nombre est supérieur à 1
    }
  }

  productquantity:number = 0;
  quantity1(value: string) {
    if (value === 'max') {
      this.productquantity += 1; // Incrémente
    } else if (value === 'min' && this.productquantity > 1) {
      this.productquantity -= 1; // Décrémente uniquement si productquantity > 1
    }
  }

  options = [
    { value: 'Simple', viewValue: 'Simple' },
    { value: 'Double', viewValue: 'Double' },
    { value: 'Jumeaux', viewValue: 'Lits Jumeaux' },
    { value: 'JumeauxDouble', viewValue: 'Lit(s) jumeaux/Double' },
    { value: 'Triple', viewValue: 'Triple' },
    { value: 'Quatriple', viewValue: 'Quatriple' },
    { value: 'Suite', viewValue: 'Suite' },
    { value: 'ChambreKing', viewValue: 'Chambre King' },
    { value: 'ChambreQueen', viewValue: 'Chambre Queen' },
    { value: 'ChambreStandard', viewValue: 'Chambre Standard' },
    { value: 'ChambreLuxe', viewValue: 'Chambre Luxe' },
    { value: 'LitDoctoire', viewValue: 'Lit en Doctoir' },
    { value: 'Familiale', viewValue: 'Familiale' },
    { value: 'Studio', viewValue: 'Studio' },
    { value: 'Appartement', viewValue: 'Appartement' },
    { value: 'Doctoir', viewValue: 'Doctoir' },
  ];
}

