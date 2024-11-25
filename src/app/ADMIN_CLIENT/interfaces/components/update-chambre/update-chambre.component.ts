import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent, MatCardTitleGroup } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-chambre',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatDivider,
    MatSelectModule,
    MatCardTitleGroup,
    CommonModule,
    ReactiveFormsModule

  ],
  templateUrl: './update-chambre.component.html',
  styleUrl: './update-chambre.component.css'
})
export class UpdateChambreComponent {
  @Input() info: string = ''; // Liaison avec le parent

  form: FormGroup;
  [key: string]: any; // Permet d'accéder à des propriétés dynamiques

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

  quantity(value: string, index: number) {
    if (value === 'max') {
      this.productQuantities[index] += 1;
    } else if (value === 'min' && this.productQuantities[index] > 1) {
      this.productQuantities[index] -= 1;
    }
  }

  productquantity:number = 0;
  quantity1(value: string) {
    if (value === 'max') {
      this.productquantity += 1;
    } else if (value === 'min' && this.productquantity > 1) {
      this.productquantity -= 1;
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


  jardins = [
    { id: 1, label: 'Douche' },
    { id: 2, label: 'Toilette' },
    { id: 3, label: 'Papier toilette' },
    { id: 4, label: 'Baignoire' },
    { id: 5, label: 'Sèche-cheveux' },
    { id: 6, label: 'Articles de toilette gratuits' },
    { id: 7, label: 'Bidet' },
    { id: 8, label: 'Chaussons' },
    { id: 9, label: 'Peignoir' },
    { id: 10, label: 'Baignoire spa' }
  ];


  equipements = [
    { id: 1, label: 'Télévision à écran plat' },
    { id: 2, label: 'Portant' },
    { id: 3, label: 'Climatisation' },
    { id: 4, label: 'Linge de maison' },
    { id: 5, label: 'Bureau' },
    { id: 6, label: 'Service de réveil' },
    { id: 7, label: 'Serviettes' },
    { id: 8, label: 'Armoire ou penderie' },
    { id: 9, label: 'Chauffage' },
    { id: 10, label: 'Ventilateur' },
    { id: 11, label: 'Coffre-fort' },
    { id: 12, label: 'Serviettes / linge de lit (frais supplémentaires)' },
    { id: 13, label: 'Logement entièrement situé au rez-de-chaussée' },
  ];


  vues = [
  { id: 1, label: 'Terrasse' },
  { id: 2, label: 'Vue sur le terrain de sport' },
  { id: 3, label: 'Balcon' },
  ];

  repas = [
    { id: 1, label: 'Bouilloire électrique' },
    { id: 2, label: 'Plateau / bouilloire' },
    { id: 3, label: 'Coin repas' },
    { id: 4, label: 'Petit-déjeuner continental' },
    { id: 5, label: 'Brunch' },
    { id: 6, label: 'Service de chambre' },
  ];



constructor(private fb: FormBuilder) {
  // Initialiser le FormGroup
  this.form = this.fb.group({});
  // Ajouter des contrôles pour chaque tableau
  this.initializeControls(this.vues, 'vue');
  this.initializeControls(this.jardins, 'jardin');
  this.initializeControls(this.equipements, 'équipement');
  this.initializeControls(this.repas, 'repas');
  // Ajoutez d'autres initialisations ici...
}

initializeControls(items: any[], prefix: string) {
  items.forEach(item => {
    this.form.addControl(`${prefix}${item.id}`, this.fb.control(false)); // false par défaut
  });
}

getCheckedItems(prefix: string) {
  return this[prefix + 's'].filter((item: { id: any; }) => this.form.get(`${prefix}${item.id}`)?.value);
}

}

