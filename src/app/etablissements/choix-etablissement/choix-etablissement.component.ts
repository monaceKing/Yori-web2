import { Component } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choix-etablissement',
  standalone: true,
  imports: [MatMenu, MatMenuTrigger, RouterLink],
  templateUrl: './choix-etablissement.component.html',
  styleUrl: './choix-etablissement.component.css'
})
export class ChoixEtablissementComponent {

}
