import { Injectable } from '@angular/core';
import BankActions from '../model/BankActions';

@Injectable({
  providedIn: 'root',
})
export class NewActionService {
  action_type: BankActions[] = [];

  constructor() {
    this.action_type = [
      new BankActions(1, 123456, 'Deposit', 300, new Date(), 0, 0),
    ];
  }

  getAccountDetails() {
    return this.action_type;
  }
}
