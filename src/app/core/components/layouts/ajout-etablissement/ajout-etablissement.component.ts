import { Component } from '@angular/core';
import { Header3Component } from '../../header3/header3.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ajout-etablissement',
  standalone: true,
  imports: [RouterOutlet,Header3Component],
  templateUrl: './ajout-etablissement.component.html',
  styleUrl: './ajout-etablissement.component.css'
})
export class AjoutEtablissementComponent {

}
