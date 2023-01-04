let num1 = +prompt("Please enter the first number");
let num2 = +prompt("Please enter the second number");
let action = prompt("Please enter an action: +, -, *, /");

switch (action) {
  case "+":
    alert(`${num1 + num2}`);
    break;
  case "-":
    alert(`${num1 - num2}`);
    break;
  case "*":
    alert(`${num1 * num2}`);
    break;
  case "/":
    alert(`${num1 / num2}`);
    break;
}
