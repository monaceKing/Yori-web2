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
      icon: 'fal fa-home',
      label: 'Nombre de réservations',
    },
    {
      routeLink: 'claudel',
      icon: 'fal fa-box-open',
      label: 'Réservations annulées',
    },
    {
      routeLink: 'amour',
      icon: 'fal fa-file',
      label: 'Montant des réservations',
    },
    {
      routeLink: 'inel',
      icon: 'fal fa-cog',
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
