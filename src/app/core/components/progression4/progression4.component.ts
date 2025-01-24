import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { PaiementComponent } from "../../../hotels/paiement/paiement.component";
import { ASavoirComponent } from "../../../hotels/a-savoir/a-savoir.component";
import { EtapeEnregistrementComponent } from "../../../hotels/etape-enregistrement/etape-enregistrement.component";
import { ProprietaireComponent } from "../../../hotels/proprietaire/proprietaire.component";
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-progression4',
  standalone: true, 
  imports: [
    MatTab,
    MatTabGroup,
    CommonModule,
    PaiementComponent,
    ASavoirComponent,
    EtapeEnregistrementComponent,
    ProprietaireComponent,
    MatTabsModule,
    RouterLink 
],
  templateUrl: './progression4.component.html',
  styleUrl: './progression4.component.css'
})
export class Progression4Component implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0;


  onTabChange(event: any) {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
    localStorage.setItem('activeTabIndex', index.toString());
  }

  previousTab() {
    if (this.activeTabIndex > 0) {
      this.activeTabIndex--;
    }
  }

  nextTab() {
    if (this.activeTabIndex < 3) {
      this.activeTabIndex++;
    }
  }

}
