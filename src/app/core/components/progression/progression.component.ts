import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { FormCaracteristiqueComponent } from '../../../hotels/form-caracteristique/form-caracteristique.component';
import { FormLocalisationComponent } from '../../../hotels/form-localisation/form-localisation.component';
import { FormPhotosComponent } from '../../../hotels/form-photos/form-photos.component';
import { FormRegleConditionsComponent } from '../../../hotels/form-regle-conditions/form-regle-conditions.component';
import { FormTarifsComponent } from '../../../hotels/form-tarifs/form-tarifs.component';
import { FormInfoGeneralesComponent } from "../../../hotels/form-info-generales/form-info-generales.component";
import { NomStructureComponent } from "../../../hotels/nom-structure/nom-structure.component";
import { CommoditesComponent } from "../../../hotels/commodites/commodites.component";
import { PetitDejeunerComponent } from "../../../hotels/petit-dejeuner/petit-dejeuner.component";
import { ParkingComponent } from "../../../hotels/parking/parking.component";
import { MatIcon } from '@angular/material/icon';
import { LanguesComponent } from "../../../hotels/langues/langues.component";
import { PolitiqueComponent } from "../../../hotels/politique/politique.component";
import { EtapeEnregistrementComponent } from "../../../hotels/etape-enregistrement/etape-enregistrement.component";

@Component({
  selector: 'app-progression',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    FormLocalisationComponent,
    FormCaracteristiqueComponent,
    FormRegleConditionsComponent,
    FormTarifsComponent,
    FormPhotosComponent,
    MatProgressBar,
    CommonModule,
    FormInfoGeneralesComponent,
    NomStructureComponent,
    CommoditesComponent,
    PetitDejeunerComponent,
    ParkingComponent,
    MatIcon,
    LanguesComponent,
    PolitiqueComponent,
    EtapeEnregistrementComponent,
],
  templateUrl: './progression.component.html',
  styleUrl: './progression.component.css'
})
 
export class ProgressionComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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
