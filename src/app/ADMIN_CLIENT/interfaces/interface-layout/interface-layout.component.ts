import { Component } from '@angular/core';
import { Header2Component } from '../../layout/header2/header2.component';
import { Footer2Component } from '../../layout/footer2/footer2.component';
import { TabsComponent } from '../tabs/tabs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interface-layout',
  standalone: true,
  imports: [
    Header2Component,
    Footer2Component,
    TabsComponent,
    RouterOutlet
  ],
  templateUrl: './interface-layout.component.html',
  styleUrl: './interface-layout.component.css'
})
export class InterfaceLayoutComponent {

} 
