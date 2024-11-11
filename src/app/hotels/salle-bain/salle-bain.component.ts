import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
@Component({
  selector: 'app-salle-bain',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatRadioGroup,
    MatRadioButton,
    MatDivider,
    JsonPipe,
    ReactiveFormsModule,
    FormsModule,
    MatIcon,
    CommonModule,
    MatSelectionList,
    MatListOption,

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './salle-bain.component.html',
  styleUrl: './salle-bain.component.css'
})
export class SalleBainComponent implements OnInit{
  ngOnInit() {}

  options: string[] = [
    'Douche',
    'Toilette',
    'Papier toilette',
    'Baignoire',
    'Sèche-cheveux',
    'Articles de toilettes gratuits',
    'Bidet',
    'Chaussons',
    'Peignoir',
    'Baignoire spa'
  ];
  selectedOptions: string[] = [];

  onSelect(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    }
  }

}
