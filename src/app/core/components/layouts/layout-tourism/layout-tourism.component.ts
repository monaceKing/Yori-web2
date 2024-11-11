import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header3Component } from '../../header3/header3.component';

@Component({
  selector: 'app-layout-tourism',
  standalone: true,
  imports: [RouterOutlet,Header3Component],
  templateUrl: './layout-tourism.component.html',
  styleUrl: './layout-tourism.component.css'
})
export class LayoutTourismComponent {

}
  