let arr = [100, 95, 85, 90];

console.log(arr.length);

arr[1] = 80;
// arr.push(80);
console.log(arr);

arr[100] = 1000;
console.log(arr); // Here it will show us: [100, 80, 85, 90, empty x 96, 1000]
console.log(arr[20]); // Will be undefined.
