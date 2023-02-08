class Mouse {
  private name: string;
  private age: number;
  private color: string;
  private alive: boolean;
  private favFood: string;

  constructor(
    name: string,
    age: number,
    color: string,
    alive: boolean,
    favFood: string
  ) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.alive = alive;
    this.favFood = favFood;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string) {
    this.name = newName;
  }
}

export default Mouse;
