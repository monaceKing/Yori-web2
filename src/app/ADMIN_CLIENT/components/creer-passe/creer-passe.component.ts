import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-client-code',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon, 
    FormsModule
  ],
  templateUrl: './creer-passe.component.html',
  styleUrl: './creer-passe.component.css'
})
export class CreerPasseComponent {
  showPad:any;

  passwordToogle(){
    this.showPad = !this.showPad;
  }

} 
 