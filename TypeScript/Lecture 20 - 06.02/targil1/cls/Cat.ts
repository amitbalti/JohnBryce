class Cat {
  private name: string;
  private age: number;
  private color: string;
  private alive: boolean;
  private mustacheLength: number;

  constructor(
    name: string,
    age: number,
    color: string,
    alive: boolean,
    mustacheLength: number
  ) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.alive = alive;
    this.mustacheLength = mustacheLength;
  }
  public getName(): string {
    return this.name;
  }

  public setName(newName: string) {
    this.name = newName;
  }
}

export default Cat;
