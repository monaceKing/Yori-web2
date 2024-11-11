import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-photo-categorie',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    MatIcon,
    CommonModule
  ],
  templateUrl: './photo-categorie.component.html',
  styleUrl: './photo-categorie.component.css'
})
export class PhotoCategorieComponent {

  // onUploadClick() {
  //   const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  //   fileInput.click();
  // }

  // onFileSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.handleFile(input.files[0]);
  //   }
  // }

  // onDrop(event: DragEvent) {
  //   event.preventDefault(); // Empêche le comportement par défaut
  //   if (event.dataTransfer?.files) {
  //     this.handleFile(event.dataTransfer.files[0]);
  //   }
  // }

  // onDragOver(event: DragEvent) {
  //   event.preventDefault(); // Empêche le comportement par défaut
  // }

  // private handleFile(file: File) {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const imgElement = document.getElementById('preview') as HTMLImageElement;
  //     imgElement.src = e.target!.result as string; // Affiche l'image sélectionnée
  //   };
  //   reader.readAsDataURL(file);
  // }

  images: string[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.images.push(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  onUploadClick(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.images.push(e.target.result);
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(image: string): void {
    this.images = this.images.filter(img => img !== image);
  }

}
