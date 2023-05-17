import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hell';
  showInfo = false;
  userLogged = true;
  grooms = ['Nadav', 'Matan', 'Ido', 'Anton', 'Daniel'];

  onBtnClick() {
    this.userLogged = !this.userLogged;
  }

  getShowColor() {
    return this.userLogged ? 'red' : 'green';
  }
}
