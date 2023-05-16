import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlyOdd = false;
  numbers = [1, 2, 3, 4, 5];
  odds = [1, 3, 5];
  evens = [2, 4];
  title = 'ui-recipe-book-app';
  loadedFeature = 'recipes';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
