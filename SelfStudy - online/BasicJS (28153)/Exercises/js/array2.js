let arr = [0, 90, 80, 55, 32, 1, 93, 21, 92, 88];
let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

alert(`Even numbers: ${even}, Odd numbers: ${odd}`);
