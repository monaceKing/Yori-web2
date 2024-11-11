import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardFooter, MatCardContent } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatLabel, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-nom-structure',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatLabel,
    MatCardHeader,
    MatCardFooter,
    MatCardContent,
    MatFormField,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatRadioButton,
    CommonModule,
    MatIcon,
    MatRadioGroup
  ],
  templateUrl: './nom-structure.component.html',
  styleUrl: './nom-structure.component.css'
})
export class NomStructureComponent {

  favoriteSeason: string | undefined;
  seasons: string[] = ['N/A', '1 étoile', '2 étoiles', '3 étoiles', '4 étoiles', '5 étoiles'];
breakfastServed: any;

  getStarArray(): number[] {
    if (!this.favoriteSeason || this.favoriteSeason === 'N/A') {
      return [];
    }
    const starCount = parseInt(this.favoriteSeason.split(' ')[0], 10);
    return Array(starCount).fill(0);
  }


}
