import Worker from "./Worker";

class FlightAttendant extends Worker {
  // fields
  private origin: string = "";
  private department: string = "";

  // constructor
  constructor(
    name: string,
    surname: string,
    seniority: number,
    origin: string,
    department: string
  ) {
    super(name, surname, seniority);
    this.setOrigin(origin);
    this.setDepartment(department);
  }

  // setters
  public setOrigin(origin: string) {
    this.origin = origin;
  }

  public setDepartment(department: string) {
    // if (
    //   this.department != "First Class" ||
    //   this.department != "Business Class" ||
    //   this.department != "Economy"
    // ) {
    //   console.log("This employ doesn't have a department");
    //   this.department = "";
    //   return;
    // }
    this.department = department;
  }

  // getters
  public getOrigin(): string {
    return this.origin;
  }

  public getDepartment(): string {
    return this.department;
  }

  // methods
  public print(): string {
    return `${super.print()}
    Department: ${this.getDepartment()}
    `;
  }
}

export default FlightAttendant;
