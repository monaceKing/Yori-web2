import { CommonModule } from '@angular/common';
import { Component, input, output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FransdaComponent } from '../fransda/fransda.component';
import { ClaudelComponent } from '../claudel/claudel.component';
import { AmourComponent } from '../amour/amour.component';
import { InelComponent } from '../inel/inel.component';
 
@Component({
  selector: 'app-letf-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './letf-sidebar.component.html',
  styleUrl: './letf-sidebar.component.css'
})
export class LetfSidebarComponent implements OnInit{ 


  isLeftSidebarCollapsed = input<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    { 
      routeLink: 'nombre-reservation',
      icon: 'fal fa-user',
      label: 'Nombre de réservations',
      component: FransdaComponent // Assurez-vous d'importer ce composant
    },
    {
      routeLink: 'claudel',
      icon: 'fal fa-user-times',
      label: 'Réservations annulées',
      component: ClaudelComponent // Assurez-vous d'importer ce composant
    },
    {
      routeLink: 'amour',
      icon: 'fal fa-sack-dollar',
      label: 'Montant des réservations',
      component: AmourComponent // Assurez-vous d'importer ce composant
    },
    {
      routeLink: 'inel',
      icon: 'fal fa-hand-holding',
      label: 'Montant des commissions',
      component: InelComponent // Assurez-vous d'importer ce composant
    },
  ];

  activeComponent = this.items[0].component; // Composant actif par défaut

  setActiveComponent(component: any) {
    this.activeComponent = component;
  }

  constructor(public router: Router) {}

  ngOnInit() {
    // Redirection vers le premier élément par défaut
    // this.router.navigate(['nombre-reservation'], { skipLocationChange: true });
    // this.router.navigateByUrl('/interface/nombre-reservation');
  }

  // toggleCollapse(): void {
  //   this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  // }

  // closeSidenav(): void {
  //   this.changeIsLeftSidebarCollapsed.emit(true);
  // }

}
