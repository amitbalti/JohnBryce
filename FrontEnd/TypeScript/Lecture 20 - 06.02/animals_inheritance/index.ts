import Cat from "./cls/Cat";
import Cow from "./cls/Cow";
import Lion from "./cls/Lion";

console.log("Starting\n=================");

let lion = new Lion("Lev", 4, "Brown", "Roarrrr");
let mumu = new Cow("Mumu", 3, "White Black", "Mu mu", true);
let bumper = new Cat("Bumper", 4, "Asphalt", "Mewwww");

bumper.drinkMilk(mumu);
lion.eat(mumu);
bumper.drinkMilk(mumu);
