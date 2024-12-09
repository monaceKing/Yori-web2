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
  templateUrl: './probleme-verification.component.html',
  styleUrl: './probleme-verification.component.css'
})
export class ProblemeVerificationComponent {

}
