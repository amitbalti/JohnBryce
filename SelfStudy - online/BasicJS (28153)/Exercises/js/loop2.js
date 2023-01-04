let number = +prompt("Please enter a number");
let isPrime = true;

if (number == 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number / 2; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  alert("This is a prime number");
} else {
  alert("This is not a prime number");
}
