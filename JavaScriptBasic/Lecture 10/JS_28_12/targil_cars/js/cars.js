let cars = [];

// let singleCar = {
//   carNumber: 0,
//   carType: "",
//   carFuel: "",
//   carYear: 0,
//   carLic: false,
// };

const sayHi = () => {
  alert("Hi Hila :O");
};

const handleData = () => {
  // Pointers
  // Car number
  const carNumber = +document.getElementById("carNumber").value;

  // Car Type
  const carType = document.getElementById("carType").value;

  // Car fuel types:
  const carFuelList = document.getElementsByName("carFuel");
  let carFuel = "";
  for (let i = 0; i < carFuelList.length; i++) {
    if (carFuelList[i].checked) {
      carFuel = carFuelList[i].value;
      break;
    }
  }

  // Manufacture year
  const carYear = +document.getElementById("year").value;

  // Do you have valid license?
  let carLic = document.getElementById("license").checked;

  // console.log
  console.log(`The car number is: ${carNumber}`);
  console.log(`The car type is: ${carType}`);
  console.log(`The car fuel type is: ${carFuel}`);
  console.log(`The car manufacture year is: ${carYear}`);
  console.log(`Do you have a valid license? ${carLic}`);

  // Entering the data into a JSON object

  //   console.log(singleCar);
  const newCar = new Object();

  newCar.carNumber = carNumber;
  newCar.carType = carType;
  newCar.carFuel = carFuel;
  newCar.carYear = carYear;
  newCar.carLic = carLic;

  // Pushing the data from the object into the car array - our database
  cars.push(newCar);
  makeTableData();
};

const makeTableData = () => {
  let tableData = document.getElementById("carList");
  let data = ""; // string

  //   for (let i = 0; i < cars.length; i++) {
  //     // like writing cars.maps()
  //     cars[i]; // like writing (item)=>{}
  //   }

  cars.map((item) => {
    data += `
    <tr>
     <td>${item.carNumber}</td>
     <td>${item.carType}</td>
     <td>${item.carFuel}</td>
     <td>${item.carYear}</td>
     <td>${item.carLic ? "✔️" : "❌"}</td>
     <td>🖊</td>
     <td>🗑</td>
    </tr>
    `;
    // data += "<tr><td>" + item.carNumber + "</td><td>" + item.carType;
  });
  tableData.innerHTML = data;
};

const handleDataZeev = () => {
  // Pointers
  const carNumber = +document.getElementById("carNumber").value;
  const carType = document.getElementById("carType").value;
  const carFuels = document.getElementsByName("carFuel");
  const carYear = +document.getElementById("year").value;
  const carLic = document.getElementById("license").checked;

  let fuel = "";
  carFuels.forEach((item) => {
    if (item.checked) {
      fuel = item.value;
    }
  });

  //  console.log(carNumber, carType, fuel, carYear, carLicense);
};
