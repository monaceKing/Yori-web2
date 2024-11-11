import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { TypeChambreComponent } from "../../../hotels/type-chambre/type-chambre.component";
import { SalleBainComponent } from "../../../hotels/salle-bain/salle-bain.component";
import { EquipementsComponent } from "../../../hotels/equipements/equipements.component";
import { TarifHebergementComponent } from "../../../hotels/tarif-hebergement/tarif-hebergement.component";
import { PhotoCategorieComponent } from "../../../hotels/photo-categorie/photo-categorie.component";
import { ImagesEtablissementComponent } from "../../../hotels/images-etablissement/images-etablissement.component";
import { PaiementComponent } from "../../../hotels/paiement/paiement.component";
import { ASavoirComponent } from "../../../hotels/a-savoir/a-savoir.component";
import { CommoditesComponent } from '../../../hotels/commodites/commodites.component';
import { EtapeEnregistrementComponent } from '../../../hotels/etape-enregistrement/etape-enregistrement.component';
import { FormCaracteristiqueComponent } from '../../../hotels/form-caracteristique/form-caracteristique.component';
import { FormInfoGeneralesComponent } from '../../../hotels/form-info-generales/form-info-generales.component';
import { FormLocalisationComponent } from '../../../hotels/form-localisation/form-localisation.component';
import { FormPhotosComponent } from '../../../hotels/form-photos/form-photos.component';
import { FormRegleConditionsComponent } from '../../../hotels/form-regle-conditions/form-regle-conditions.component';
import { FormTarifsComponent } from '../../../hotels/form-tarifs/form-tarifs.component';
import { LanguesComponent } from '../../../hotels/langues/langues.component';
import { NomStructureComponent } from '../../../hotels/nom-structure/nom-structure.component';
import { ParkingComponent } from '../../../hotels/parking/parking.component';
import { PetitDejeunerComponent } from '../../../hotels/petit-dejeuner/petit-dejeuner.component';
import { PolitiqueComponent } from '../../../hotels/politique/politique.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-progression2',
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
    TypeChambreComponent,
    SalleBainComponent,
    EquipementsComponent,
    TarifHebergementComponent,
    PhotoCategorieComponent,
    ImagesEtablissementComponent,
    PaiementComponent,
    ASavoirComponent,
    RouterOutlet
],
  templateUrl: './progression2.component.html',
  styleUrl: './progression2.component.css'
})
export class Progression2Component implements  AfterViewInit{
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

  // previousTab() {
  //   if (this.tabGroup) {
  //     const currentIndex = this.tabGroup.selectedIndex;
  //     if (currentIndex !== null && currentIndex > 0) {
  //       this.selectTab(currentIndex - 1);
  //     }
  //   }
  // }

  // nextTab() {
  //   if (this.tabGroup) {
  //     const currentIndex = this.tabGroup.selectedIndex;
  //     if (currentIndex !== null && this.tabGroup._tabs.length > 0 && currentIndex < this.tabGroup._tabs.length - 1) {
  //       this.selectTab(currentIndex + 1);
  //     }
  //   }
  // }

  previousTab() {
    if (this.activeTabIndex > 0) {
      this.activeTabIndex--;
    }
  }

  nextTab() {
    if (this.activeTabIndex < 5) {
      this.activeTabIndex++;
    }
  }


}
