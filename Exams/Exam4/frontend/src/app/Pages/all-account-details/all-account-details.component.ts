import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-account-details',
  templateUrl: './all-account-details.component.html',
  styleUrls: ['./all-account-details.component.css'],
})
export class AllAccountDetailsComponent {
  submitDepositForm() {
    throw new Error('Method not implemented.');
  }
  selectedAction: any;
  constructor(private router: Router) {}
}
