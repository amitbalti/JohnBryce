//

const writeValue = (key, value) => {
  localStorage.setItem(key, value);
  console.log(`You wrote ${value} into key: ${key}`);
};

// user : "zeev mindali" - the key is 'user' and the value is 'zeev mindali'.
// age : 48 - the key is 'age' and the value is '48' - as a string.

const readValue = (key) => {
  console.log(`value: ${localStorage.getItem(key)}`);
  return localStorage.getItem(key);
};

const deleteValue = (key) => {
  console.log(`key ${key} was deleted`);
  localStorage.removeItem(key);
};

const clearStorage = () => {
  console.log(`clear all the local storage keys`);
  localStorage.clear();
};

// user : "zeev mindali" - the key is 'user' and the value is 'zeev mindali'.
// age : 48 - the key is 'age' and the value is '48' - as a string.

const test = () => {
  // write values to local storage
  writeValue("user", "zeev mindali");
  writeValue("age", 48);

  var userAge = +readValue("age"); // convert string to number by the +
  console.log(typeof userAge);
  // console.log(`user age: ${readValue("age")}`);
  console.log(`user year of birth: ${2023 - readValue("age")}`);

  deleteValue("user");
};

// run the test function
test();

// working with array
// array is an object
const myArray = () => {
  var myArray = [];
  var zeev = new Object();
  zeev.name = "zeev mindali";
  zeev.age = 48;
  zeev.city = "Kiryat yam";

  var alon = new Object();
  alon.name = "alon moyal";
  alon.age = 18;
  alon.city = "natanya";
  //console.log(alon);

  myArray.push(zeev, alon);
  //console.log(myArray);
  //localStorage.setItem("users",JSON.stringify(myArray));
  var myUsers = JSON.parse(localStorage.getItem("users")).filter(
    (item) => item.name != "zeev mindali"
  );
  console.log(myUsers);
  console.log("type: ", typeof myUsers);
  console.log(myUsers[0].name);
};
myArray();
