import Person from "./Person";

abstract class Worker extends Person {
  // identifier
  protected seniority: number = 0;

  constructor(name: string, surname: string, seniority: number) {
    super(name, surname);
    this.setSeniority(seniority);
  }

  // setters
  public setSeniority(seniority: number) {
    this.seniority = seniority;
  }

  // getters
  public getSeniority(): number {
    return this.seniority;
  }

  public print(): string {
    return `${super.print()}    Seniority years: ${this.getSeniority()} `;
  }
}

export default Worker;
