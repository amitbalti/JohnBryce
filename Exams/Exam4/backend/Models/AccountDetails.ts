class BankDetails {
  public objectId: number;
  public accountNumber: number;
  public typeOfAction: string;

  constructor(objectId: number, accountNumber: number, typeOfAction: string) {
    this.objectId = objectId;
    this.accountNumber = accountNumber;
    this.typeOfAction = typeOfAction;
  }
}

export default BankDetails;
