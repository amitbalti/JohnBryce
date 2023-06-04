import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BankServiceService } from 'src/app/services/bank-service.service';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.css'],
})
export class NewActionComponent implements OnInit {
  selectedAction: string | undefined;
  amount: number = 0;
  accountNumber: string = '';
  operation: string = '';
  intrestRate: number = 0;
  amountOfPayments: number = 0;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private bankService: BankServiceService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.accountNumber = params.get('accountNumber') || '';
      this.operation = params.get('operation') || '';
    });
  }

  doOperation() {
    this.bankService.createNewOperation(
      this.accountNumber,
      this.amount,
      this.operation,
      this.intrestRate,
      this.amountOfPayments
    );
    this.route.navigate(['/account', this.accountNumber]);
  }
}
