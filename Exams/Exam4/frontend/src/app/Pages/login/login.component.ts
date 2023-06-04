import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  accountNumber: number | undefined;

  constructor(private router: Router) {}

  login(): void {
    const isValidAccount = true;

    if (isValidAccount) {
      this.router.navigate(['/account', this.accountNumber]);
    } else {
      alert('Invalid account number');
    }
  }
}
