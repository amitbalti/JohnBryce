import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private router: Router) {}

  nadavClick() {
    // console.log('Nadav the....');
    // Option 1 for using navigation:
    // this.router.navigate(['/player/U6XcNpYQ_zI']);
    // Option 2 for using navigation:
    this.router.navigate(['/player', 'U6XcNpYQ_zI']);
  }
}
