import { Component } from '@angular/core';
import { Header2Component } from '../../layout/header2/header2.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-interface-layout',
  standalone: true,
  imports: [
    Header2Component,
    TabsComponent
],
  templateUrl: './interface-layout.component.html',
  styleUrl: './interface-layout.component.css'
})
export class InterfaceLayoutComponent {

} 
