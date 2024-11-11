import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nom-utilisateur',
  standalone: true,
  imports: [
    MatCardModule,
    MatDivider,
    RouterLink
  ],
  templateUrl: './nom-utilisateur.component.html',
  styleUrl: './nom-utilisateur.component.css'
})
export class NomUtilisateurComponent {

}
