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

  propertyTypes: { value: string, label: string }[] = [
    { value: 'parc_national', label: 'Parc national' },
    { value: 'camping', label: 'Camping' },
    { value: 'randonnee', label: 'Randonnée' },
    { value: 'musee', label: 'Musée' },
    { value: 'plage_prive', label: 'Plage privé' },
    { value: 'maison_traditionnelle', label: 'Maison traditionnelle' },
    { value: 'chute', label: 'Chute' },
    { value: 'peche', label: 'Pêche' },
    { value: 'chasse', label: 'Chasse' },
    { value: 'jetski', label: 'Jetski' },
    { value: 'balade_bateau', label: 'Balade en bateau' },
    { value: 'balade_pirogue', label: 'Balade en pirogue' },
    { value: 'balade_helicoptere', label: 'Balade en hélicoptère' },
    { value: 'balade_velo', label: 'Balade en vélo' },
    { value: 'balade_pied', label: 'Balade à pied' },
    { value: 'ile', label: 'Île' },
    { value: 'montagne', label: 'Montagne' },
    { value: 'escalade', label: 'Escalade' },
    { value: 'cabane', label: 'Cabane' },
    { value: 'zoo', label: 'Zoo' },
    { value: 'safari_4x4', label: 'Safari 4×4' },
    { value: 'montgolfiere', label: 'Montgolfière' },
    { value: 'natation', label: 'Natation' },
    { value: 'fleuve', label: 'Fleuve' },
    { value: 'pyramide', label: 'Pyramide' },
    { value: 'tour_ville', label: 'Tour de ville' }
  ];

}
