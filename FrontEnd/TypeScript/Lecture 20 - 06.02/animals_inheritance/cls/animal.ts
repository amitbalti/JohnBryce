import Lion from "./Lion";
import Cow from "./Cow";
import Cat from "./Cat";
import Mouse from "./Mouse";
class Animal {
  private name: string;
  private age: number;
  private color: string;
  private isAlive: boolean;
  private sound: string;

  constructor(name: string, age: number, color: string, sound: string) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.isAlive = true;
    this.sound = sound;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public eat(animal: any) {
    // instanceof - kind of
    if (animal instanceof Cow || animal instanceof Mouse) {
      this.isAlive = false;
    } else {
      console.log("You cannot kill this animal");
    }
  }

  public drinkMilk(cow: Cow) {
    if (this instanceof Cat) {
      if (cow.isAlive) {
        console.log("Yammi, milk");
      } else {
        console.log("Iches, blood");
      }
    } else {
      console.log("You are not a cat");
    }
  }

  public makeSound() {
    console.log(this.sound);
  }
}

export default Animal;
