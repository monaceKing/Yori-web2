import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
 
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
export class LetfSidebarComponent {


  isLeftSidebarCollapsed = input<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    { 
      routeLink: 'fransda',
      icon: 'fal fa-user',
      label: 'Nombre de réservations',
    },
    {
      routeLink: 'claudel',
      icon: 'fal fa-user-times',
      label: 'Réservations annulées',
    },
    {
      routeLink: 'amour',
      icon: 'fal fa-sack-dollar',
      label: 'Montant des réservations',
    },
    {
      // <i class="fa-solid fa-hand-holding-dollar"></i>
      routeLink: 'inel',
      icon: 'fal fa-hand-holding',
      label: 'Montant des commissions',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

}
