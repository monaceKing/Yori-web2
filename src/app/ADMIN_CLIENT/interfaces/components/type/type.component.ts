import { Component } from '@angular/core';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  favoriteSeason: string | undefined;
  seasons: string[] = ['N/A', '1 étoile', '2 étoiles', '3 étoiles', '4 étoiles', '5 étoiles'];
  breakfastServed: any;

  getStarArray(): number[] {
    if (!this.favoriteSeason || this.favoriteSeason === 'N/A') {
      return [];
    }
    const starCount = parseInt(this.favoriteSeason.split(' ')[0], 10);
    return Array(starCount).fill(0);
  }
}
