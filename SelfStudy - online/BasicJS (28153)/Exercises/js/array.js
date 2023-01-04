let arr = [0, 90, 80, 55, 32, 1, 93, 21, 92, 88];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

alert(`Largest number is: ${largest}`);
