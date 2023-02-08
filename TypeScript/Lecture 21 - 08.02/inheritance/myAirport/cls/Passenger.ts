import Person from "./Person";

class Passenger extends Person {
  // Because 'getDrink' method in 'Person' is abstract, this method will have to be shown this class.
  // public getDrink(): string {
  //   throw new Error("Method not implemented.");
  // }

  // fields
  private passportId: number = 0;

  // constructor
  constructor(name: string, surname: string, passportId: number) {
    super(name, surname);
    this.setPassportId(passportId);
  }

  // setters
  public setPassportId(passportId: number) {
    this.passportId = passportId;
  }

  // getters
  public getPassportId(): number {
    return this.passportId;
  }

  // methods
  public print(): string {
    return `${super.print()}    Passport ID: ${this.getPassportId()}
    `;
  }
}

export default Passenger;
