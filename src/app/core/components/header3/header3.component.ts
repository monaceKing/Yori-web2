import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css'
})
export class Header3Component {
  userName = "Monace";

  logout() {
    console.log("function logout called");
    }
}
