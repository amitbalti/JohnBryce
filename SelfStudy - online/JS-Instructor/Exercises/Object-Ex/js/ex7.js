var arr = [];

for (var i = 0; i < 6; i++) {
  var num = Math.floor(Math.random() * 100 + 1);
  // console.log(num);
  arr.push(num);
}
alert(
  `The numbers are ${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]} and the lucky number is ${arr[5]}`
);
