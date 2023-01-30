// My Way:
var dice = setInterval(() => {
  document.getElementById("dice1").innerHTML = parseInt(Math.random() * 6) + 1;
  document.getElementById("dice2").innerHTML = parseInt(Math.random() * 6) + 1;
}, 30);

function stopDice() {
  clearInterval(dice);
}

// Zeev's way:
// const stopDice = () => {
//   clearInterval(dice);
// };

// const getDice = () => {
//   return Math.floor(Math.random() * 6 + 1);
// };

// var dice = setInterval(() => {
//   document.getElementById("dice1").innerText = getDice();
//   document.getElementById("dice2").innerText = getDice();
// }, 30);
