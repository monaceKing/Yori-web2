import { CommonModule } from '@angular/common';
import { Component , input, OnInit, output } from '@angular/core';
import { Router } from '@angular/router';
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
      routeLink: 'nombre-reservation',
      icon: 'fal fa-user',
      label: 'Nombre de réservations',
      component: FransdaComponent
    },
    {
      routeLink: 'claudel',
      icon: 'fal fa-user-times',
      label: 'Réservations annulées',
      component: ClaudelComponent
    },
    {
      routeLink: 'amour',
      icon: 'fal fa-sack-dollar',
      label: 'Montant des réservations',
      component: AmourComponent
    },
    {
      routeLink: 'inel',
      icon: 'fal fa-hand-holding',
      label: 'Montant des commissions',
      component: InelComponent
    },
  ];

  activeComponent = this.items[0].component; // Composant actif par défaut

  setActiveComponent(component: any) {
    this.activeComponent = component;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    // Redirection vers la route '/cible' lors de l'initialisation du composant
    // this.router.navigateByUrl('/interface/nombre-reservation');
  }

  selectedTab: number = 0; // Onglet sélectionné par défaut

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex; // Met à jour l'onglet sélectionné
  }
}
 