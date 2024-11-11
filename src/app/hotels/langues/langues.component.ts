import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatListOption, MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-langues',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardFooter,
    MatCardTitle,
    MatCardContent,
    MatSelectionList,
    MatListOption,
    CommonModule
  ],
  templateUrl: './langues.component.html',
  styleUrl: './langues.component.css'
})
export class LanguesComponent {

  options: string[] = ['Français', 'Anglais', 'Espagnol', 'Italien', 'Portugais', 'Deutsh'];

  selectedOptions: string[] = [];

  onSelect(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    }
  }
}
