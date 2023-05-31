class BankActions {
  public objectId: number;
  public accountNumber: number;
  public typeOfAction: string;
  public sum: number;
  public date: Date;
  public interest?: number;
  public amountOfPayments?: number;

  constructor(
    objectId: number,
    accountNumber: number,
    typeOfAction: string,
    sum: number,
    date: Date,
    interest: number,
    amountOfPayments: number
  ) {
    this.objectId = objectId;
    this.accountNumber = accountNumber;
    this.typeOfAction = typeOfAction;
    this.sum = sum;
    this.date = date;
    this.interest = interest;
    this.amountOfPayments = amountOfPayments;
  }
}

export default BankActions;
