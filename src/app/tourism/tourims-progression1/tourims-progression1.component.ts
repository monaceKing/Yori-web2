import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { FormInfoGeneralesComponent } from '../../hotels/form-info-generales/form-info-generales.component';
import { NomStructureComponent } from '../../tourism/tourims-progression1/type-structure/nom-structure.component';
import { PolitiqueComponent } from '../../tourism/tourims-progression1/politique/politique.component';
import { PolitiqueRembourssementComponent } from "./politique-rembourssement/politique-rembourssement.component";
import { InfoImportantesComponent } from "./info-importantes/info-importantes.component";
import { InfoComplementairesComponent } from "./info-complementaires/info-complementaires.component";
import { InclusComponent } from "./inclus/inclus.component";
import { TarifsComponent } from "./tarifs/tarifs.component";
import { FinEtape1Component } from "./fin-etape1/fin-etape1.component";

@Component({
  selector: 'app-tourims-progression1',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    FormInfoGeneralesComponent,
    PolitiqueComponent,
    NomStructureComponent,
    PolitiqueRembourssementComponent,
    InfoImportantesComponent,
    InfoComplementairesComponent,
    InclusComponent,
    TarifsComponent,
    FinEtape1Component
],
  templateUrl: './tourims-progression1.component.html',
  styleUrl: './tourims-progression1.component.css'
})
export class TourimsProgression1Component {
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
 