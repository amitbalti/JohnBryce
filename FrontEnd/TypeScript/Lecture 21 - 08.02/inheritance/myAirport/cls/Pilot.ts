import Worker from "./Worker";

class Pilot extends Worker {
  // fields
  private licenseNum: number = 0;

  // constructor
  constructor(
    name: string,
    surname: string,
    seniority: number,
    licenseNum: number
  ) {
    super(name, surname, seniority);
    this.setLicenseNum(licenseNum);
  }

  // setters
  public setLicenseNum(licenseNum: number) {
    this.licenseNum = licenseNum;
  }

  // getters
  public getLicenseNum(): number {
    return this.licenseNum;
  }

  // methods
  public print(): string {
    return `${super.print()} 
    License Number: ${this.getLicenseNum()}
    `;
  }
}

export default Pilot;
