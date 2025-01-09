import { CommonModule } from '@angular/common';
import { Component , EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { AmourComponent } from './amour/amour.component';
import { ClaudelComponent } from './claudel/claudel.component';
import { FransdaComponent } from './fransda/fransda.component';
import { InelComponent } from './inel/inel.component';

interface MenuItem {
  icon: string;
  label: string;
  component: any;
}

@Component({
  selector: 'app-analyse',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css'
})
export class AnalyseComponent implements OnInit {
  @Input() isLeftSidebarCollapsed: boolean | undefined;
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  items: MenuItem[] = [
    { icon: 'fal fa-user', label: 'Nombre de réservations', component: FransdaComponent },
    { icon: 'fal fa-user-times', label: 'Réservations annulées', component: ClaudelComponent },
    { icon: 'fal fa-sack-dollar', label: 'Montant des réservations', component: AmourComponent },
    { icon: 'fal fa-hand-holding', label: 'Montant des commissions', component: InelComponent },
  ];

  activeComponent = this.items[0].component; // Composant actif par défaut
  selectedTab: number = 0; // Onglet sélectionné par défaut

  ngOnInit() {
    const storedTabIndex = localStorage.getItem('activeTab');
    if (storedTabIndex) {
      const index = +storedTabIndex;
      if (index >= 0 && index < this.items.length) {
        this.selectedTab = index;
        this.activeComponent = this.items[this.selectedTab].component;
      }
    }
  }

  selectTab(tabIndex: number) {
    if (tabIndex >= 0 && tabIndex < this.items.length) {
      this.selectedTab = tabIndex;
      localStorage.setItem('activeTab', tabIndex.toString());
      this.activeComponent = this.items[tabIndex].component;
    }
  }
}
 