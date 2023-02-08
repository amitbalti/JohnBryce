import Person from "./person"; // When we want to use the class in another file, we will import our class in this way.

// Before we import the class from another file:

/*let maya = {
  age: 19,
  gender: "Female",
  city: "Holon",
  smart: true,
};

// maya.name = "maya"; // It won't work because we didn't defined it.

let hila = {
  age: 23,
  gender: "Female",
  city: "Rishon Le Tzion",
  smart: true,
};

let netanel = {
  iq: 123,
  //   gender: "It's complicated",
  tel: "050-555-5555",
  song: "One",
  car: true,
};

let myTime = {
  hour: 45,
  minutes: 88,
};

// There is no validation! We don't know if it's correct or not.
// When I am working with templates, I am working with classes.
// OOP
console.log(maya, hila, netanel);
*/

// After we import the class from another file (but still written with a lot of code):

// let ran = new Person();
// ran.age = 23;
// ran.city = "Givat Shmuel";
// ran.name = "Ran";
// ran.smart = true;

// let nadav = new Person();
// nadav.age = 26;
// nadav.name = "Nadav";
// nadav.smart = true;
// nadav.city = "TLV";

// Then instead of using a lot of code like above, we will do it like this, in one line:

let ran = new Person("Ran", 23, undefined, true);
// When it's a string we will need to write undefined.
let nadav = new Person("Nadav", 26, "TLV");
// When it's a boolean we will just leave it empty.

console.log(ran, nadav);
