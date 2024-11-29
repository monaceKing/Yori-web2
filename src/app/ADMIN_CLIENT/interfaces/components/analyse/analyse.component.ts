import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-analyse',
  standalone: true,
  imports: [
    CommonModule,
    MatTabGroup,
    MatTab
  ],
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css'
})
export class AnalyseComponent {

  selectedTab: number = 0; // Onglet sélectionné par défaut

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex; // Met à jour l'onglet sélectionné
  }
}
