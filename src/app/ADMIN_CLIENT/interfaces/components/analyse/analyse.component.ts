import { CommonModule } from '@angular/common';
import { Component , input, OnInit, output } from '@angular/core';
import { AmourComponent } from './amour/amour.component';
import { ClaudelComponent } from './claudel/claudel.component';
import { FransdaComponent } from './fransda/fransda.component';
import { InelComponent } from './inel/inel.component';


@Component({
  selector: 'app-analyse',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css'
})
export class AnalyseComponent implements OnInit{

  isLeftSidebarCollapsed = input<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    { 
      icon: 'fal fa-user',
      label: 'Nombre de réservations',
      component: FransdaComponent
    },
    {
      icon: 'fal fa-user-times',
      label: 'Réservations annulées',
      component: ClaudelComponent
    },
    {
      icon: 'fal fa-sack-dollar',
      label: 'Montant des réservations',
      component: AmourComponent
    },
    {
      icon: 'fal fa-hand-holding',
      label: 'Montant des commissions',
      component: InelComponent
    },
  ];

  
  activeComponent = this.items[0].component; // Composant actif par défaut
  selectedTab: number = 0; // Onglet sélectionné par défaut

  ngOnInit() {
      // Récupérer l'index de l'onglet actif depuis localStorage
      const storedTabIndex = localStorage.getItem('activeTab');
      if (storedTabIndex) {
          this.selectedTab = +storedTabIndex; // Convertir en nombre
          this.activeComponent = this.items[this.selectedTab].component; // Définir le composant actif
      }
  }

  setActiveComponent(component: any) {
      this.activeComponent = component;
  }

  selectTab(tabIndex: number) {
      this.selectedTab = tabIndex; // Met à jour l'onglet sélectionné
      localStorage.setItem('activeTab', tabIndex.toString()); // Stocke l'index dans localStorage

      // Mettre à jour le composant actif en fonction de l'onglet sélectionné
      this.activeComponent = this.items[tabIndex].component;

      // Actualiser la page (recharger le composant)
      window.location.reload(); // Cela rechargera la page et affichera le bon onglet
  }
}
 