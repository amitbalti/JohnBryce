import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDetailsService } from 'src/app/services/account-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login_input = '';
  router: any;

  constructor(private accoutDetails: AccountDetailsService, router: Router) {}

  ngOnInit() {}

  myAccountDetails() {
    this.accoutDetails.getAccountDetails();
    this.router.navigate(['/account', this.login_input]);
  }
}
