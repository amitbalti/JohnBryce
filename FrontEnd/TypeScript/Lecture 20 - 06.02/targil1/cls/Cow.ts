class Cow {
  private name: string;
  private age: number;
  private color: string;
  private alive: boolean;
  private bell: boolean;

  constructor(
    name: string,
    age: number,
    color: string,
    // alive: boolean,
    bell: boolean
  ) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.alive = true;
    this.bell = bell;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string) {
    this.name = newName;
  }

  public die() {
    this.alive = false;
  }

  public getAlive() {
    return this.alive;
  }
}

export default Cow;
