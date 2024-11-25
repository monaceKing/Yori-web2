import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-telecharge-photos',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon
  ],
  templateUrl: './ajout-photos.component.html',
  styleUrl: './ajout-photos.component.css'
})
export class AjoutPhotosComponent {

  // Nouvelle galerie indépendante
  imagesSecondary: string[] = [
    'assets/img/chambre.png',
    'assets/img/card1.png',
    'assets/img/card2.png',
    'assets/img/card3.png',
    'assets/img/serpent.png',
    'assets/img/test.png',
  ];
  selectedImagesSecondary: Set<number> = new Set();
  @ViewChild('fileInputSecondary') fileInputSecondary: any;


  // Ajouter une image à la galerie secondaire
  addImageSecondary(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            // Ajouter l'image au tableau des images de la galerie secondaire
            this.imagesSecondary.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // Déclencher l'input file pour la galerie secondaire
  triggerFileInputSecondary(): void {
    this.fileInputSecondary.nativeElement.click(); // Simule un clic sur l'input file caché
  }


  removeImage(index: number) {
    this.imagesSecondary.splice(index, 1); // Supprime l'image à l'index spécifié
  }


}

