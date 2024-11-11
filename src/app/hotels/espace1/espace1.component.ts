import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-espace1',
  standalone: true,
  imports: [
    MatDivider,
    MatList,
    MatListItem
  ],
  templateUrl: './espace1.component.html',
  styleUrl: './espace1.component.css'
})
export class Espace1Component {

}
