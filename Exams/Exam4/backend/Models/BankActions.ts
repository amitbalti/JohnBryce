class BankActions {
  public accountNumber: number;
  public typeOfAction: string;
  public amount: number;
  public interest?: number;
  public amountOfPayments?: number;

  constructor(
    accountNumber: number,
    typeOfAction: string,
    amount: number,
    interest?: number,
    amountOfPayments?: number
  ) {
    this.accountNumber = accountNumber;
    this.typeOfAction = typeOfAction;
    this.amount = amount;
    this.interest = interest;
    this.amountOfPayments = amountOfPayments;
  }
}

export default BankActions;
