import Lion from "./cls/Lion";
import Cow from "./cls/Cow";
import Cat from "./cls/Cat";
import Mouse from "./cls/Mouse";

// Mine:

// let cow = new Cow("Edna", 2, "Black and White", false, true);
// // let lion = new Lion("Simba", 5, "Orange", true, true);
// let cat = new Cat("Tiger", 1, "Gray", true, 20);
// let mouse = new Mouse("Tom", 7, "Black", true, "Milk");

// // Cow is alive? Cat can drink and lion can eat.
// if (cow.isAlive() === true) {
//   console.log("Yay! Cat can drink the milk!");
//   console.log("Oh no! Lion can NOT eat the cow!");
// } else {
//   console.log("Oh no! Cat can NOT drink the milk!");
//   console.log("Yay! Lion can eat the cow!");
// }

// // Changing names:
// cow.setName("Mooo");
// // lion.setName("Mofasa");
// cat.setName("Mewww");
// mouse.setName("Gross");
// console.log(cow.getName());
// // console.log(lion.getName());
// console.log(cat.getName());
// console.log(mouse.getName());

// Zeev's:
let lion = new Lion("Lev", 3, "Brown", false);
let mushMush = new Cow("Mush", 4, "Brown White", true);
let mumu = new Cow("Mumu", 2, "White Black", false);

console.log(lion);
console.log(mushMush);
console.log(mumu);

lion.eatCow(mushMush);

console.log("=======================");

console.log(mushMush);
console.log(mumu);
