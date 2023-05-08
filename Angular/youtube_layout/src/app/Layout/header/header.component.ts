import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan = 'Angular the best?';
  boys = 'Sagi, Ilan, Matan, Nadav, Ido, Alon';
  girls = 'Lior, Noam, Hila, Shira, Deborah';

  test = '<u> names: </u> zeev etc....';

  showBoys() {
    return `Boys: ${this.boys}`;
  }

  showGirls() {
    return `Girls: ${this.girls}`;
  }
}
