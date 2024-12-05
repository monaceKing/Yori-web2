import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { MatTab, MatTabGroup } from '@angular/material/tabs';
// import { RouterOutlet } from '@angular/router';
import { LetfSidebarComponent } from "./letf-sidebar/letf-sidebar.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-analyse',
  standalone: true,
  imports: [
    CommonModule,
    // MatTabGroup,
    // MatTab,
    // RouterOutlet,
    LetfSidebarComponent,
    MainComponent
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
 