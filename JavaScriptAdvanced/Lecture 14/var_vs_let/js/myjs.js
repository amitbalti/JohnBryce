const myFunc = () => {
  // I want a global variable named num1
  num1 = 4;

  if (num1 == 4) {
    var num1 = 3;
  }
};

// myFunc();
// console.log(num1);

const setLetAndVar = () => {
  let a = 4;
  {
    // WRONG - var a;
    // shadowing
    let a;
    console.log(a);
  }
  console.log(a);
};
setLetAndVar();

const number = 5;
number = 6;

const vat = 17;
