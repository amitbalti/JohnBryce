// My way:
function getStar1() {
  return;
}

let name1 = "Amit";
let obj = {
  name1: `* ${name1} *`,
  [getStar1()]: `*********
  * ${name1}  *
  ********* `,
};

// console.log(obj.name1);
// console.log(obj[getStar1()]);

// Zeev's way:

/*

********
* zeev *
********

*/

String.prototype.makeStar = function () {
  let starLength = this.length + 4;
  let star = "";
  for (let counter = 0; counter < starLength; counter++) {
    // star += "*";
    star += "❤️";
  }
  //   return `${star}\n* ${this} *\n${star}\n`;
  return `${star}\n❤️ ${this} ❤️\n${star}\n`;
};

let myName = "Amit Balteriski";
// console.log(myName.makeStar());

let students = [
  "Ben Biton",
  "Daniel Gapso",
  "Lior Zadok",
  "Adam Eshte",
  "Amit Balteriski",
];
students.map((item) => console.log(item.makeStar()));

console.log("מבצע וודקה + 10 רדבול".makeStar());
