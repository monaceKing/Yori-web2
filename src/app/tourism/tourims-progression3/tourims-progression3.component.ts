import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { ASavoirComponent } from '../tourims-progression3/a-savoir/a-savoir.component';
import { PaiementComponent } from '../tourims-progression3/paiement/paiement.component';
import { ProprietaireComponent } from '../tourims-progression3/proprietaire/proprietaire.component';
import { FinEtape1Component } from "../tourims-progression1/fin-etape1/fin-etape1.component";

@Component({
  selector: 'app-tourims-progression3',
  standalone: true,
  imports: [
    MatCard,
    MatTab,
    MatTabGroup,
    CommonModule,
    PaiementComponent,
    ASavoirComponent,
    ProprietaireComponent,
    MatTabsModule,
    MatProgressBar,
    MatIcon,
    RouterLink,
    FinEtape1Component
],
  templateUrl: './tourims-progression3.component.html',
  styleUrl: './tourims-progression3.component.css'
})
export class TourimsProgression3Component implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0;

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.selectTab(this.activeTabIndex);
  //   });
  // }

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
