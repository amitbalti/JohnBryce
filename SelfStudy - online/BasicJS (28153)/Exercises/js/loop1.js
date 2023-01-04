let num = +prompt("Please enter a number");
let sum = 0;

while (num > 0) {
  sum += num % 10;
  num = parseInt(num / 10);
}

alert(`The sum is: ${sum}`);
