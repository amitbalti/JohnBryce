var droneList = [];

const checkForData = () => {
  console.log(localStorage.getItem("myData"));
  // Will turn a JSON into an object.
  droneList = JSON.parse(localStorage.getItem("myData"));
  console.log(droneList);
};

checkForData();

const addNewDrone = () => {
  const newDrone = new Object();
  newDrone.owner = document.getElementById("ownerName").value;
  newDrone.date = new Date();
  newDrone.vip = document.getElementById("isVIP").checked;
  newDrone.manufactor = document.getElementById("manufactor").value;
  droneList.push(newDrone);
  console.log(droneList);

  // This will not work - since droneList is an object:
  //   localStorage.setItem("myData", droneList);
  // We will convert our object to json:
  localStorage.setItem("myData", JSON.stringify(droneList)); // Here we asked the JSON to convert all the data we have into one big string.
};
