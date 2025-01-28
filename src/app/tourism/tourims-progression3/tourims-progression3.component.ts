import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { ASavoirComponent } from '../tourims-progression3/a-savoir/a-savoir.component';
import { PaiementComponent } from '../tourims-progression3/paiement/paiement.component';
import { ProprietaireComponent } from '../tourims-progression3/proprietaire/proprietaire.component';
import { FinEtape1Component } from "../tourims-progression1/fin-etape1/fin-etape1.component";

@Component({
  selector: 'app-tourims-progression3',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    CommonModule,
    PaiementComponent,
    ASavoirComponent,
    ProprietaireComponent,
    MatTabsModule,
    RouterLink,
    FinEtape1Component
],
  templateUrl: './tourims-progression3.component.html',
  styleUrl: './tourims-progression3.component.css'
})
export class TourimsProgression3Component {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0;

 onTabChange(event: MatTabChangeEvent) {
     this.activeTabIndex = event.index;
     localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
   }
 
   selectTab(index: number) {
     this.activeTabIndex = index;
     localStorage.setItem('activeTabIndex', index.toString());
     this.tabGroup.selectedIndex = index;
   }
  
   previousTab() {
     if (this.activeTabIndex > 0) {
       this.selectTab(this.activeTabIndex - 1);
     }
   }
 
   nextTab() {
     if (this.activeTabIndex < this.tabGroup._tabs.length - 1) {
       this.selectTab(this.activeTabIndex + 1);
     }
   }
}
