// let grade;
let arr = [];
// let sum = 0;

for (let i = 1; i <= 10; i++) {
  // grade = +prompt("Please enter your grade");
  // sum += grade;
  arr.push(+prompt("Please enter your grade"));
  // The attribute 'push()' will get the number the user is inserting into the array.
}

// document.write(`Average is: ${sum / 10}`);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  console.log("</br>");
}

console.log(arr[4]);
