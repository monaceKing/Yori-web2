import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [
    CommonModule,
    MatTab,
    MatTabGroup,
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
