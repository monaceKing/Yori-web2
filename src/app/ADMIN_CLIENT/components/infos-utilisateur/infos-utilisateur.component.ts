import { Component,ElementRef,ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-infos-utilisateur',
  standalone: true,
  imports: [
    MatCardModule,
    MatDivider,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './infos-utilisateur.component.html',
  styleUrl: './infos-utilisateur.component.css'
})
export class InfosUtilisateurComponent {
  @ViewChild('phoneInput', { static: false }) phoneInputElement!: ElementRef;

  ngAfterViewInit(): void {
    if (this.phoneInputElement) {
      intlTelInput(this.phoneInputElement.nativeElement, {
        initialCountry: 'GA',
        separateDialCode: true,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/24.5.0/build/js/utils.js'
      });
    }
  }
}
 