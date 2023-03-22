import Cow from "./Cow";

class Lion {
  private name: string;
  private age: number;
  private color: string;
  private alive: boolean;
  private wild: boolean;

  constructor(
    name: string,
    age: number,
    color: string,
    // alive: boolean,
    wild: boolean
  ) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.alive = true;
    this.wild = wild;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string) {
    this.name = newName;
  }

  // When importing a class we can use it like this:
  public eatCow(cow: Cow) {
    cow.die();
  }
}

export default Lion;
