import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { Header2Component } from '../../header2/header2.component';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [RouterOutlet,Header2Component,FooterComponent],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css'
})
export class ClientLayoutComponent {

}
