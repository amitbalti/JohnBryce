import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BankServiceService } from 'src/app/services/bank-service.service';

@Component({
  selector: 'app-all-account-details',
  templateUrl: './all-account-details.component.html',
  styleUrls: ['./all-account-details.component.css'],
})
export class AllAccountDetailsComponent implements OnInit {
  accountNumber: string | null = '';
  accountOperations: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private bankService: BankServiceService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(async (params) => {
      this.accountNumber = params.get('accountNumber');
      this.accountOperations = await this.bankService.getAllOperations(
        this.accountNumber || ''
      );
    });
  }

  withdraw(): void {
    this.route.navigate(['/newAction', this.accountNumber, 'withdraw']);
  }

  deposit(): void {
    this.route.navigate(['/newAction', this.accountNumber, 'deposit']);
  }

  loan(): void {
    this.route.navigate(['/newAction', this.accountNumber, 'loan']);
  }
}
