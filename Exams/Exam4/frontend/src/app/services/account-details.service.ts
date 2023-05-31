import { Injectable } from '@angular/core';
import BankDetails from '../model/AccountDetails';

@Injectable({
  providedIn: 'root',
})
export class AccountDetailsService {
  account_details: BankDetails[] = [];

  constructor() {
    this.account_details = [
      new BankDetails(1, 122345, 'Deposit'),
      new BankDetails(1, 12345, 'Deposit'),
    ];
  }

  getAccountDetails() {
    return this.account_details;
  }
}
