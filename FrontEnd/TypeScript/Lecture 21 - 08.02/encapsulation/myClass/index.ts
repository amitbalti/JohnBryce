import Cake from "./cls/cake";
import Student from "./cls/Student";
import Teacher from "./cls/teacher";

// let cake = new Cake();

let adam = new Student("Adam", 90, "adam@hi.bye", 18);
let arik = new Student("Arik", 100, "arik@rambler.ru", 22);

console.log("Setting new student Nadav");
// let nadav = new Student("Nadav", 120, "nadav@talent.johnbryce.co.il", 22); // Will give us an error and will print to the console: average grade must be between 0 and 100, grade set to 0.
let nadav = new Student("Nadav", 100, "nadav@talent.johnbryce.co.il", 22);

console.log(nadav.getName());
console.log(arik.getAvgGrade());

console.log(nadav.print());
// adam.setEmail("adame@intel.com");
