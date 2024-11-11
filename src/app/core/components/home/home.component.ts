import { Component } from '@angular/core';
import { Acceuil1Component } from "../../../acceuil1/acceuil1.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Acceuil1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
