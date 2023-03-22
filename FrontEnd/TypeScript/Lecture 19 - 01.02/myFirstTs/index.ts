// console.log("When Ido and... will be married (we have two choices)");
// console.log("Nadav is in the house....");
// console.log("Matan and ... sitting on a tree");
// console.log("Hello");

let myNum: string = "1"; // Can't put number and a string in the same value! It will use strict mode.
myNum += " Will it work?";
myNum += " " + 2;

let num: string = "5";
let reiss: number = +num;
// console.log(reiss);

// By using TypeScript: if, switch, for, map, while..... <-- Stay the same.

// const pow2 = (num: any): Number => {
// num: any -> can get any type. The result of the function will have to be a Number.
const pow2 = (num: number): number => {
  // (num: number):number -> can get only type number. The result of the function will have to be a number as well.

  return num * num;
};

console.log(pow2(5)); // We will get 25.
// console.log(pow2("5")); // The app will crash! Because we need to get a number and receive a number.
// console.log(pow2("five")); // The app will crash! Because we need to get a number and receive a number.

// The user can't play with the things because this is now strict mode.
// Meaning that we can't use string in a number and so on.
// Also! We will not use Capital letters at the beginning of the string of a word!
// We can't play in the program! It is strict!
