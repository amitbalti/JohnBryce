let day = prompt("Please enter a day");

// We will show the opening & closing hours:
// Sunday - Thursday -> 08:00 - 18:00.
// Friday -> 08:00 - 12:00.
// Saturday -> Closed.

switch (day) {
  case "Sunday":
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    alert("08:00-18:00");
    break;
  case "Friday":
    alert("08:00-12:00");
    break;
  case "Saturday":
    alert("Closed");
    break;
  default:
    alert("You didn't enter a valid day");
}
