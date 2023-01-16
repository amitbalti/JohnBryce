function getDynamicKey() {
  return "Matan the king of the world";
}

function getToken() {
  return "Beny beny yeled ra";
}

function getAdamKey() {
  return "ADAM";
}

function getZeevKey() {
  return "zevik";
}

let sameVal = "Arik";
let obj = {
  //  Prototypes can be set this way
  __proto__: Object, // underline underline proto underline underline - will refer to the prototype

  // key value, write short code sameVal: sameVal
  sameVal,

  // Some function
  funcNum() {
    return 10;
  },

  // Dynamic values for keys
  [getDynamicKey()]: "and Arik too.",
  [getAdamKey()]: "adam",
  [getToken()]: "token approved...",
  [getZeevKey()]: "this is me...",
};

// console.log("obj.__proto__: ", obj.__proto__);
console.log("obj.sameVal:", obj.sameVal);
console.log("obj.funcNum():", obj.funcNum());
// console.log(getDynamicKey());
console.log("obj[]getDynamicKey():", obj[getDynamicKey()]);
console.log("obj['ADAM']:", obj["ADAM"]);
// console.log(obj.ADAM);
// console.log("obj[]getAdamKey():", obj[getAdamKey()]);
console.log("obj[]getToken():", obj[getToken()]);
console.log("obj[getZeevKey()]:", obj[getZeevKey()]);
console.log(obj["Matan the king of the world"]);
