var penny = setInterval(() => {
  console.log("Penny");
}, 1000);

var stopSheldon = setTimeout(() => {
  clearInterval(penny);
  console.log("WHAT SHELDON???");
}, 3000);
