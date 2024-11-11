import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-probleme-connexion',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon
  ],
  templateUrl: './probleme-connexion.component.html',
  styleUrl: './probleme-connexion.component.css'
})
export class ProblemeConnexionComponent {

}
