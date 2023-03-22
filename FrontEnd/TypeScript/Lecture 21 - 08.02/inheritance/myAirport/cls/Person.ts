// 'abstract' means that we cannot make instance of abstract classes.
abstract class Person {
  // identifier
  protected name: string = "";
  protected surname: string = "";

  // constructor
  constructor(name: string, surname: string) {
    this.setName(name);
    this.setSurname(surname);
  }

  // setters
  public setName(name: string) {
    this.name = name;
  }

  public setSurname(surname: string) {
    this.surname = surname;
  }

  // getters
  public getName(): string {
    return this.name;
  }

  public getSurname(): string {
    return this.surname;
  }

  public print(): string {
    return `
    First Name: ${this.getName()}
    Surname: ${this.getSurname()}
`;
  }

  // abstract method, need to be implemented in derived classes
  // public abstract getDrink(): string;
}

export default Person;
