function addHours(date, hours) {
  date.setHours(date.getHours() + hours);
  return date;
}
function subtractMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() - minutes);
  return date;
}

const date = new Date();
let newDate = addHours(date, 8);
newDate = subtractMinutes(date, 20);

alert(newDate);
