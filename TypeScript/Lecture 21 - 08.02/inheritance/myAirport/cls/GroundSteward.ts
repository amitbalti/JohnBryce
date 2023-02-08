import Worker from "./Worker";

class GroundSteward extends Worker {
  // fields
  private origin: string = "";
  private role: string = "";

  // constructor
  constructor(
    name: string,
    surname: string,
    seniority: number,
    origin: string,
    role: string
  ) {
    super(name, surname, seniority);
    this.setOrigin(origin);
    this.setRole(role);
  }

  // setters
  public setOrigin(origin: string) {
    this.origin = origin;
  }

  public setRole(role: string) {
    this.role = role;
  }

  // getters
  public getOrigin(): string {
    return this.origin;
  }

  public getRole(): string {
    return this.role;
  }

  // methods
  public print(): string {
    return `${super.print()}
    Origin: ${this.getOrigin()}
    Role: ${this.getRole()}
    `;
  }
}

export default GroundSteward;
