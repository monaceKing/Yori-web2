import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UpdateChambreComponent } from '../update-chambre/update-chambre.component';
import { TarifsAdminComponent } from '../tarifs-admin/tarifs-admin.component';
@Component({
  selector: 'app-hebergements',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatSelectModule,
    UpdateChambreComponent,
    TarifsAdminComponent
],
  templateUrl: './hebergements.component.html',
  styleUrl: './hebergements.component.css'
})
export class HebergementsComponent {
    infoFromChild1: string = '';
    infoFromChild2: string = '';


    images: string[] = [
      'assets/img/chambre.png',
    ];
    selectedImages: Set<number> = new Set();

    @ViewChild('fileInput') fileInput: any; // Référence à l'élément input file

      // Ajouter une image à la galerie principale
    addImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            // Ajouter l'image au tableau des images de la galerie principale
            this.images.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

    // Déclencher l'input file pour la galerie principale
    triggerFileInput(): void {
      this.fileInput.nativeElement.click(); // Simule un clic sur l'input file caché
    }


  // Sélectionner toutes les images de la galerie principale
  selectAll(): void {
    this.selectedImages = new Set(this.images.map((_, index) => index));
  }

  // Désélectionner toutes les images de la galerie principale
  deselectAll(): void {
    this.selectedImages.clear();
  }

  // Supprimer les images sélectionnées de la galerie principale
    deleteSelected(): void {
    this.images = this.images.filter((_, index) => !this.selectedImages.has(index));
    this.selectedImages.clear();
  }

  // Vérifier si une image est sélectionnée dans la galerie principale
  isSelected(index: number): boolean {
    return this.selectedImages.has(index);
  }

  // Sélectionner ou désélectionner une image spécifique dans la galerie principale
  toggleSelection(index: number): void {
      if (this.selectedImages.has(index)) {
        this.selectedImages.delete(index);
      } else {
        this.selectedImages.add(index);
      }
    }



  currentDiv: string = 'default'; // Définit la div par défaut à afficher
  // Méthodes pour changer la div affichée
  showDefault() {
    this.currentDiv = 'default';
  }
  showDiv1() {
    this.currentDiv = 'div1';
  }
  showDiv2() {
    this.currentDiv = 'div2';
  }


  onSubmit() {
    console.log('Données du formulaire :', {
      child1: this.infoFromChild1,
      child2: this.infoFromChild2,
      // Ajoutez d'autres enfants ici...
    });
  }



  // productQuantities: number[] = [0, 0, 0, 0, 0, 0, 0, 0]; // Ajoute autant d'éléments que nécessaire
  // lits = [
  //   { name: 'lit simple', size: '90-130 cm de large' },
  //   { name: 'lit double', size: '131-150 cm de large' },
  //   { name: 'lit King-Size', size: '151-180 cm' },
  //   { name: 'grand lit King-Size', size: '181-210 cm' },
  //   { name: 'lit superposé', size: 'Dimensions variables' },
  //   { name: 'Dimensions variables', size: 'Dimensions variables' },
  //   { name: 'futon', size: 'Dimensions variables' },
  //   // Ajoute d'autres lits ici si nécessaire
  // ];

  // quantity(value: string, index: number) {
  //   if (value === 'max') {
  //     this.productQuantities[index] += 1; // Incrémente le nombre pour ce type de lit
  //   } else if (value === 'min' && this.productQuantities[index] > 1) {
  //     this.productQuantities[index] -= 1; // Décrémente uniquement si le nombre est supérieur à 1
  //   }
  // }

  // productquantity:number = 0;
  // quantity1(value: string) {
  //   if (value === 'max') {
  //     this.productquantity += 1; // Incrémente
  //   } else if (value === 'min' && this.productquantity > 1) {
  //     this.productquantity -= 1; // Décrémente uniquement si productquantity > 1
  //   }
  // }

}
