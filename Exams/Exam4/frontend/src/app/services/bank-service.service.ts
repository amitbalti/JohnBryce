import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankServiceService {
  url = 'http://localhost:8080/bankAccount';
  constructor(private http: HttpClient) {}

  async getAllOperations(accountNumber: string): Promise<any> {
    return await this.http
      .post(this.url + '/allAccountOperations', {
        accountNumber,
      })
      .toPromise();
  }

  async createNewOperation(
    accountNumber: string,
    amount: number,
    typeOfAction: string,
    interest: number,
    amountOfPayments: number
  ): Promise<any> {
    return await this.http
      .post(this.url + '/addNewOperation', {
        accountNumber,
        amount,
        typeOfAction,
        interest,
        amountOfPayments,
      })
      .toPromise();
  }
}
