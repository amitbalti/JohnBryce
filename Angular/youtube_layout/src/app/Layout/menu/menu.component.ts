import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div ng-app="myApp" ng-controller="myCtrl">
      <select
        [(ngModel)]="selectedColor"
        (ngModelChange)="changeColor()"
        name="colors"
        id=""
      >
        <option value="" disabled selected>Choose the color</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="deeppink">Pink</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <h2 [style.color]="selectedColor">The color changed!</h2>
    </div>
  `,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  selectedColor: string = 'white';

  changeColor() {
    // Do nothing if no color is selected
    if (!this.selectedColor) {
      return;
    }
    // Change the color of the h2 tag based on the selected color
    const h2 = document.getElementsByTagName('h2')[0];
    h2.style.color = this.selectedColor;
  }
}
