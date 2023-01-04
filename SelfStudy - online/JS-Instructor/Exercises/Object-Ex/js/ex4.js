var arr = ["one", "two", "three", "four", "five", "six"];
var userNum = prompt("Please enter a number using words");

if (
  userNum == "one" ||
  userNum == "two" ||
  userNum == "three" ||
  userNum == "four" ||
  userNum == "five" ||
  userNum == "six"
) {
  alert("Congratulations! You found a correct number!");
} else {
  alert("Oh No! Please try again!");
}
