console.log("Hello World!!!");

function sayHiToHila() {
  // get the object with the id "hila"
  let hila = document.getElementById("hila");
  // change the inner of the element to other message
  hila.innerHTML = "Hello Hila";
}

// get the object with the id "hila"
let hila = document.getElementById("hila");
// change the inner of the element to other message
hila.innerHTML = "Hello Hila";

// get all elements that have the same id
let names = document.getElementsByName("uName");
// names -> array
let singleName = "Amit";
for (let i = 0; i < names.length; i++) {
  names[i].innerHTML = singleName;
}

function giveUmbrella() {
  let res = document.getElementById("res");
  res.innerText = singleName + " got an umbrella";
}
