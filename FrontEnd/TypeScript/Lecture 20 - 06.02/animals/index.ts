import Person from "./cls/person";
// console.log("Hello World!");

/*
let person = {
  name: "zeev",
  age: 48,
  isMarried: true,
  city: "Qiryat yam",
};

let person2 = {
  name: "zeev",
  age: 48,
  isMarried: true,
  kids: 1,
};

console.log(person);
console.log(person2);
*/

let zeev = new Person("Zeev", 48, true, "Qiryat yam", "123456");
let adam = new Person("Adam", 31, true, "Ramat Gan", "1234");
let alon = new Person("aln", 18, false, "Natanya", "54321");
// zeev.age = 48;
// zeev.city = "Qiryat yam";
// zeev.isMarried = true;

// console.log(zeev);

// The system isn not secured :(

// We can not use the field password since it's private
// zeev.password = "hila";
// if (zeev.password === "hila") {
// if (zeev.checkPassword("zeev", "123456")) {
//   console.log("Hello my master");
// } else {
//   console.log("Why who are you?");
// }

console.log(zeev.getName());
console.log(adam.getName());
console.log(alon.getName());

alon.setName("Alon");
zeev.setName("Zeevik the fox");
console.log(alon.getName());
// 'getName' - method.
// Instance - everything that is coming out of Person.
// Person is the class.
console.log(zeev.getName());
