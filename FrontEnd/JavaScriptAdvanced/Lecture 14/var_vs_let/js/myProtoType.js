function Person() {
  this.name = "zeev";
  //   this.age = 48;
  this.date = new Date();
  this.email = "amitbalti@gmail.com";
}

// console.log(person);

// ** name **
Person.prototype.getName = function () {
  return `** ${this.name} **`;
};

Date.prototype.getNewDate = function () {
  //   let myDate = this.toLocaleDateString();
  let myDate = this.toLocaleString().split(",")[0];
  myDate = myDate.split("/"); // 01/16/2023
  return `${myDate[0]}/${myDate[1]}/${myDate[2]}`; // 16/01/2023
  //   return myDate;
};

let date1 = new Date("01/16/2023");
let date2 = new Date("08/07/1974").getNewDate();
let date3 = new Date("10/10/1996").getNewDate();

Date.prototype.getVIP_ETA = function () {
  // get date from the object
  var date = new Date(this);
  // add 30 days to the date
  date.setDate(date.getDate() + 7);
  // return new date
  return date;

  // short programming in one line
  // return new Date(this.setDate(this.getDate() + 7))
};

Date.prototype.getHebDate = function () {
  // return jewish date
};

Person.prototype.getUser = function () {
  return this.email.split("@")[0];
};

Person.prototype.getDomain = function () {
  return this.email.split("@")[1];
};

const person1 = new Person();
person1.name = "alon";
const person2 = new Person();
person2.name = "arik";

// Person.prototype.gender = "male";
// console.log(Person.prototype);
// console.log(person1.gender);
// Person.prototype = { age: 50 };
// Person.prototype.getDate = function () {
//   return this.date; // 'this' - refer to the object that we defined it inside.
// };
// const person3 = new Person();
// console.log(person3.getDate());

// console.log(person1.name, person2.name);
// console.log(person1.age, person2.age, person3.age);

const person4 = new Person();
person4.name = "zeev";
const person5 = new Person();
person5.name = "amital";

console.log(person1.getName());
console.log(person2.getName());
console.log(person4.getName());
console.log(person5.getName());

const myDate = new Date();
console.log(myDate.getNewDate());

console.log(person1.getUser());
console.log(person1.getDomain());
