import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-service-client-code',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './changer-passe.component.html',
  styleUrl: './changer-passe.component.css'
})
export class ChangerPasseComponent {
  showPad:any;

  passwordToogle(){
    this.showPad = !this.showPad;
  }

} 
 