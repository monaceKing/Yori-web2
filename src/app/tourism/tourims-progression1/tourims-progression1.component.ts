import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabChangeEvent, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { CommoditesComponent } from '../../hotels/commodites/commodites.component';
import { EtapeEnregistrementComponent } from '../../hotels/etape-enregistrement/etape-enregistrement.component';
import { FormCaracteristiqueComponent } from '../../hotels/form-caracteristique/form-caracteristique.component';
import { FormInfoGeneralesComponent } from '../../hotels/form-info-generales/form-info-generales.component';
import { FormLocalisationComponent } from '../../hotels/form-localisation/form-localisation.component';
import { FormPhotosComponent } from '../../hotels/form-photos/form-photos.component';
import { FormRegleConditionsComponent } from '../../hotels/form-regle-conditions/form-regle-conditions.component';
import { FormTarifsComponent } from '../../hotels/form-tarifs/form-tarifs.component';
import { LanguesComponent } from '../../hotels/langues/langues.component';
import { NomStructureComponent } from '../../tourism/tourims-progression1/type-structure/nom-structure.component';
import { ParkingComponent } from '../../hotels/parking/parking.component';
import { PetitDejeunerComponent } from '../../hotels/petit-dejeuner/petit-dejeuner.component';
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
    FormLocalisationComponent,
    FormCaracteristiqueComponent,
    FormRegleConditionsComponent,
    FormTarifsComponent,
    FormPhotosComponent,
    MatProgressBar,
    CommonModule,
    FormInfoGeneralesComponent,
    CommoditesComponent,
    PetitDejeunerComponent,
    ParkingComponent,
    MatIcon,
    LanguesComponent,
    PolitiqueComponent,
    EtapeEnregistrementComponent,
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
export class TourimsProgression1Component implements AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0; 

  // ngAfterViewInit() { 
  //   setTimeout(() => {
  //     const savedIndex = localStorage.getItem('activeTabIndex');
  //     this.activeTabIndex = savedIndex ? +savedIndex : 0;
  //     this.selectTab(this.activeTabIndex);
  //   });
  // }

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
 