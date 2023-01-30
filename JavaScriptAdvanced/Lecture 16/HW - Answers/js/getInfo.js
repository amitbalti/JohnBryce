const locateCar = async () => {
  const carID = document.getElementById("carNumber").value;
  // Object literal
  let newCar = new Object();

  await getCarTruck(carID)
    .then((data) => {
      if (data) {
        newCar = data;
      }
    })
    .catch((err) => console.log(err));

  await getRecall(carID).then((data) => (newCar.recall = data));

  console.log(newCar);
};

// OLD - NOT IN USE!
const locateCar_old = async () => {
  // Get car ID from input text box
  const carID = document.getElementById("carNumber").value;
  // Check if we have a car...
  await getCarTruck(carID)
    .then((data) => {
      if (data != null) {
        // We have a car, check for handicap
        let isHandiCap = getHandiCap(carID);
      } else {
        // Check truck or bike
      }
    })
    .then(
      await getOffroad(carID).then((data) => {
        // Show if offroad
      })
    )
    .then(
      await getRecall(carID).then((data) => {
        //check if it offroad
      })
    );
};
