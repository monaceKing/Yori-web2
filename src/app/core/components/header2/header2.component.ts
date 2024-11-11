import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatMenuItem,
    MatCardContent,
    MatCardTitle,
    MatMenu,
    MatIcon,
    // MatMenuTrigger,
    MatMenuModule,
    // MatButtonModule,
    MatMenuItem,
    // MatCardFooter,
    MatDivider,
    // MatList,
    // MatListItem,
    MatTableModule,
    CommonModule,
    MatCardModule
    ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})



export class Header2Component implements OnInit{

  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url; // Récupère la route actuelle
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; // Met à jour la route si elle change
    });
  }


  userName = 'Juste Monace'; // Remplacez par le nom réel de l'utilisateur
  info = "mes informations"

  logout() {
    // Logique de déconnexion ici
    console.log('Déconnexion');
  }

  noms: string[] = ['HOTEL RENDAMA', 'HIBISCUS', 'LA COLOMBE', 'RADISSON BLU'];

  onButtonClick(nom: string) {
    alert(`Vous avez cliqué sur ${nom}`);
  }

}
