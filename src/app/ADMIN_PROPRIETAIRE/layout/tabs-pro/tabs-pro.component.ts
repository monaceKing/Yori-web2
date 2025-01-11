import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { FooterProComponent } from "../footer-pro/footer-pro.component";
import { AccueilProComponent } from "../../components/accueil/accueil-pro.component";
import { CompteProprietaireComponent } from "../../components/compte-proprietaire/compte-proprietaire.component";
import { MessagesComponent } from "../../components/messages/messages.component";


@Component({
  selector: 'app-tabs-pro',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    CommonModule,
    MatIcon,
    FooterProComponent,
    AccueilProComponent,
    CompteProprietaireComponent,
    MessagesComponent
],
  templateUrl: './tabs-pro.component.html',
  styleUrl: './tabs-pro.component.css'
})
export class TabsProComponent implements AfterViewInit{

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
