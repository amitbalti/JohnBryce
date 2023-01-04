let day = +prompt("Please enter a day number");

// if (day == 1) {
//   alert("Sunday");
// } else if (day == 2) {
//   alert("Monday");
// } else if (day == 3) {
//   alert("Tuesday");
// } else if (day == 4) {
//   alert("Wednesday");
// } else if (day == 5) {
//   alert("Thursday");
// } else if (day == 6) {
//   alert("Friday");
// } else {
//   alert("Saturday");
// }

// The above if statement can be changed with the following switch statement

switch (day) {
  /* The day basically check if in case the number is 1. 
       If so, it will alert 'Sunday'.
       Then in will break the statement and leave, so it won't continue checking again and again.
  */
  case 1:
    alert("Sunday");
    break;
  case 2:
    alert("Monday");
    break;
  case 3:
    alert("Tuesday");
    break;
  case 4:
    alert("Wednesday");
    break;
  case 5:
    alert("Thursday");
    break;
  case 6:
    alert("Friday");
    break;
  case 7:
    alert("Saturday");
    break;
}

switch (day) {
  case "Sunday":
    alert("1");
    break;
  case "Monday":
    alert("2");
    break;
  case "Tuesday":
    alert("3");
    break;
  case "Wednesday":
    alert("4");
    break;
  case "Thursday":
    alert("5");
    break;
  case "Friday":
    alert("6");
    break;
  case "Saturday":
    alert("7");
    break;
}
