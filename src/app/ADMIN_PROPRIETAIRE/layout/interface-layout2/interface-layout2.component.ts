import { Component } from '@angular/core';
import { HeaderProComponent } from "../header-pro/header-pro.component";
import { TabsProComponent } from "../tabs-pro/tabs-pro.component";

@Component({
  selector: 'app-interface-layout2',
  standalone: true,
  imports: [HeaderProComponent, TabsProComponent],
  templateUrl: './interface-layout2.component.html',
  styleUrl: './interface-layout2.component.css'
})
export class InterfaceLayout2Component {

}
 