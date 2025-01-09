import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { ReservationComponent } from "../components/reservation/reservation.component";
import { InfoEtablissementComponent } from '../components/info-etablissement/info-etablissement.component';
import { BoiteReceptionComponent } from "../components/boite-reception/boite-reception.component";
import { CommentairesComponent } from "../components/commentaires/commentaires.component";
import { AnalyseComponent } from "../components/analyse/analyse.component";
import { Footer2Component } from "../../layout/footer2/footer2.component";
import { PhotoEtablissementComponent } from "../components/photo-etablisssement/photo-etablisssement.component";
import { TypeComponent } from "../components/type/type.component";
import { HebergementsComponent } from "../components/hebergements/hebergements.component";
import { FacturesComponent } from "../components/factures/factures.component";
import { EquipementServiceComponent } from "../components/equipement-service/equipement-service.component";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    MatIcon,
    ReservationComponent,
    InfoEtablissementComponent,
    BoiteReceptionComponent,
    CommentairesComponent,
    AnalyseComponent,
    Footer2Component,
    TypeComponent,
    HebergementsComponent,
    FacturesComponent,
    PhotoEtablissementComponent,
    EquipementServiceComponent
],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements AfterViewInit{

  activeTabIndex: number = 0; // Index par défaut pour les onglets
  currentComponent: string | null = null; // Composant actuellement sélectionné

  ngOnInit() {
    // Récupérer l'index de l'onglet actif et le composant sélectionné depuis le sessionStorage
    const storedIndex = sessionStorage.getItem('activeTabIndex');
    const storedComponent = sessionStorage.getItem('currentComponent');

    if (storedIndex) {
      this.activeTabIndex = +storedIndex; // Convertir en nombre
    }

    if (storedComponent) {
      this.currentComponent = storedComponent; // Récupérer le composant sélectionné
    }
  }

  onTabChange(event: any) {
    this.activeTabIndex = event.index; // Mettre à jour l'index actif
    sessionStorage.setItem('activeTabIndex', this.activeTabIndex.toString()); // Sauvegarder dans le sessionStorage
  }

  showComponent(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.currentComponent = selectElement.value;
    sessionStorage.setItem('currentComponent', this.currentComponent);
  }


  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  

  isMenuOpen = false;
  // currentComponent: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSelect(select: HTMLSelectElement) {
    select.focus();
    select.click(); // Ouvre le sélecteur
  }




}
