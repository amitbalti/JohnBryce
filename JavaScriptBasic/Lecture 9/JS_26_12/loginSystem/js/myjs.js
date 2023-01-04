function makeLogin() {
  console.log("I am in login");

  // uName = admin && uPass = admin
  let uName = document.getElementById("uName").value;
  let uPass = document.getElementById("uPass").value;
  let res = document.getElementById("res");
  //  console.log(uName.value, uPass.value);

  if (uName == "admin" && uPass == "admin") {
    res.innerText = "Hello my master";
  } else {
    res.innerText = "Why who are you?";
  }
}

function calc() {
  let price = +document.getElementById("price").value;
  console.log(typeof price);
  let res2 = document.getElementById("res2");
  res2.innerText = price * 1.17;
}
