import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-hebergements',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon
  ],
  templateUrl: './hebergements.component.html',
  styleUrl: './hebergements.component.css'
})
export class HebergementsComponent {
    // Galerie principale (existant)
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
}
