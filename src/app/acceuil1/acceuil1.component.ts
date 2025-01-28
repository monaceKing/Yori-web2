import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-acceuil1',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    RouterLink
],
  templateUrl: './acceuil1.component.html',
  styleUrl: './acceuil1.component.css'
})
export class Acceuil1Component {

}
