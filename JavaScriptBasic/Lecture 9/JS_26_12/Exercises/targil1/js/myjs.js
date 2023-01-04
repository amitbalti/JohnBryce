function calcMaaser() {
  let price = +document.getElementById("price").value;
  let res = document.getElementById("res");
  res.innerText = price * 0.9;
}

function calcHomesh() {
  let price = +document.getElementById("price").value;
  let res2 = document.getElementById("res2");
  res2.innerText = price * 0.8;
}
