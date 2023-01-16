// 10000000 => 10,000,000
// 5 => 5
// 10000 => 10,000
// 1234567890 => 1,234,567,890
// number => string

// My way - I was wrong!!
Number.prototype.makePsik = function (item, index) {
  let numLength = this.length;
  let psik = "";

  psik += index + ":" + item + "<br/>";
  //   for (let counter = 0; counter < numLength; counter++) {}
  //   myNum.forEach((num) => {
  //     num += 3;
  //   });
  //   console.log(num);
  //   if (numLength == 3) {
  //     psik += ",";
  //   }
};
let myNum2 = "1234567890";
// console.log(myNum.makePsik());

// Zeev Way:

// Add a function to Number with prototype
Number.prototype.makeComa = function () {
  // Insert the number into temp variable
  let temp = this;
  // Make the result variable empty and from string type
  let result = "";
  // Continue as long as temp is more than 0
  while (temp > 0) {
    // Get last 3 digits and add coma (,) if result is not empty
    result = (temp % 1000) + (result.length > 1 ? "," : "") + result; // Take the three last digits (doing the modulo) & add a coma.
    // Take out the 3 numbers that we used
    temp = Number.parseInt(temp / 1000);
    // temp = Math.floor(temp / 1000);
  }
  return result;
  //   return result.substring(0, result.length - 1);
};
let myNum = 1234567890;

console.log(myNum.makeComa());
