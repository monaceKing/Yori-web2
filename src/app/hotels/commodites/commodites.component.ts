import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardFooter, MatCardContent } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatLabel, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-commodites',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatLabel,
    MatCardHeader,
    MatCardFooter,
    MatCardContent,
    MatFormField,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDivider,
    MatListModule,
    MatIcon,
  ],
  templateUrl: './commodites.component.html',
  styleUrl: './commodites.component.css'
})
export class CommoditesComponent {
  typesOfShoes: string[] = ['Restaurant', 'Service d\'étage', 'Réception ouverte 24h/24', 'Sauna', 'Centre de remise en forme', 'Jardin','Terrasse', 'Chambres non-fumeurs', 'Chambres fumeurs', 'Navette aéroport', 'Chambres familiales', 'Spa et centre de bien-être', 'Bain à remous/jacuzzi', 'Connexion Wi-Fi gratuite', 'Climatisation', 'Parc aquatique', 'Borne de recharge pour les véhicules électriques', 'Piscine', 'Plage'];
}
