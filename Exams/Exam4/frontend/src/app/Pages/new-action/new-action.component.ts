import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.css'],
})
export class NewActionComponent {
  selectedAction: string | undefined;

  constructor(private router: Router) {}

  onActionChange() {
    // Reset the formContainer
    const formContainer: any = document.getElementById('formContainer');
    formContainer.innerHTML = '';

    if (this.selectedAction === 'deposit') {
      // Create and append the deposit form
      const depositForm = document.createElement('form');
      // Add form fields, labels, and submit button
      depositForm.innerHTML = `
        <input type="number" placeholder="Amount" id="depositAmount" name="depositAmount"> <br/><br/>
        <button type="submit">Submit</button>
      `;
      formContainer.appendChild(depositForm);
    } else if (this.selectedAction === 'withdraw') {
      // Create and append the withdraw form
      const withdrawForm = document.createElement('form');
      // Add form fields, labels, and submit button
      withdrawForm.innerHTML = `
        <input type="number" placeholder="Amount" id="withdrawAmount" name="withdrawAmount"><br/><br/>
        <button type="submit">Submit</button>
      `;
      formContainer.appendChild(withdrawForm);
    } else if (this.selectedAction === 'loan') {
      // Create and append the loan form
      const loanForm = document.createElement('form');
      // Add form fields, labels, and submit button
      loanForm.innerHTML = `
        <input type="number" placeholder="Amount" id="loanAmount" name="loanAmount"><br/><br/>
        <input type="number" placeholder="Amount of Payments" id="loanAmount" name="loanAmount"><br/><br/>
        <input type="number" placeholder="Interest Rate" id="loanAmount" name="loanAmount"><br/><br/>
        <button type="submit">Submit</button>
      `;
      formContainer.appendChild(loanForm);
    }
  }

  submitDepositForm() {
    // Handle the deposit form submission here

    // Navigate to AllAccountDetailsComponent
    this.router.navigate(['/allAccountDetails']);
  }
}
