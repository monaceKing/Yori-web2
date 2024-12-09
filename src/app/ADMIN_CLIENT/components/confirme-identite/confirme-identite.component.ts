import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirme-identite',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon
  ],
  templateUrl: './confirme-identite.component.html',
  styleUrl: './confirme-identite.component.css'
})
export class ConfirmeIdentiteComponent {

}
