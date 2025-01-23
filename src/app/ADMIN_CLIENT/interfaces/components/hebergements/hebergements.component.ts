import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UpdateChambreComponent } from '../update-chambre/update-chambre.component';
import { UpdateTarifsComponent } from "../update-tarifs/update-tarifs.component";
import { AjoutPhotosComponent } from "../ajout-photos/ajout-photos.component";
import { AddPhotoComponent } from "../add-photo/add-photo.component";
import { AddCategorieComponent } from "../add-categorie/add-categorie.component";



@Component({
  selector: 'app-hebergements',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatSelectModule,
    UpdateChambreComponent,
    UpdateTarifsComponent,
    AjoutPhotosComponent,
    AddPhotoComponent,
    AddCategorieComponent
],
  templateUrl: './hebergements.component.html',
  styleUrl: './hebergements.component.css'
})

export class HebergementsComponent {
  //  On recpère les tarifs et le pourcentage venu du composant tarifs-admin
  sommeTotal: number = 0;
  pourcentageTotal: number = 0;
  monnaieTotal: string = '';

  handleCalculChange(data: { somme: number; pourcentage: number; monnaie: string }) {
    this.sommeTotal = data.somme;
    this.pourcentageTotal = data.pourcentage;
    this.monnaieTotal = data.monnaie;

    console.log('Données reçues du composant enfant :', data);
  }

  onSubmit():void {
    console.log('Données du formulaire :', {
      somme: this.sommeTotal,
      pourcentage: this.pourcentageTotal,
      monnaie: this.monnaieTotal,
    });
    // Vous pouvez également effectuer d'autres actions avec les données ici
  }


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



}
