var arr = [];

// Normal for loop:
// for (var i = 0; i < 10; i++) {
//   arr.push(i);
// }

// for of loop:
let names = ["zeev", "amital", "justin", "alon", "nadav", "snapir"];
// for (let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
// for (let i of names) {
//   arr.push(i);
// }

names.map((item) => arr.push(item));

console.log(arr);
arr.map((item) => console.log(item));
