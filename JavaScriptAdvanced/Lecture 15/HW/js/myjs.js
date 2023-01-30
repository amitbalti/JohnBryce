let myData = {};
// End points:
const privateCar =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const motorCycle =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q=";
// const trucks = "";
const disableCars =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
const reCall =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=2c33523f-87aa-44ec-a736-edbb0a82975e&q=";

const checkCarInfo = () => {
  myData = {};
  showPrivateCarInfo();
  checkMotor();
  checkDisable();
};

const showPrivateCarInfo = () => {
  const lpr = document.getElementById("lpr").value;

  fetch(privateCar + lpr)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length == 0 ? null : data.result.records[0]
    )
    .then((data) => {
      if (data == null) {
        console.log("Not a car");
      } else if (data.sug_degem == "P") {
        console.log("Private");
        myData.type = "Private";
        var date = new Date(data.tokef_dt);
        if (date > new Date()) {
          console.log("בתוקף");
          myData.licenseStatus = "Not expired";
        } else {
          console.log("לא בתוקף");
          myData.licenseStatus = "Expired";
        }
      } else if (data.sug_degem == "M") {
        console.log("Mischari");
        myData.type = "Mischari";
      }
      makeTable();
    });
};

const checkMotor = () => {
  const lpr = document.getElementById("lpr").value;

  fetch(motorCycle + lpr)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length == 0 ? null : data.result.records[0]
    )
    .then((data) => {
      if (data == null) {
        console.log("Not a Motor cycle");
      } else if (data.sug_rechev_nm == "אופנוע") {
        console.log("Motor cycle");
        myData.type = "Motorcycle";
      }
      makeTable();
    });
};

const checkDisable = () => {
  const lpr = document.getElementById("lpr").value;

  fetch(disableCars + lpr)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length == 0 ? null : data.result.records[0]
    )
    .then((data) => {
      if (data == null) {
        console.log("Not a disable car");
        myData.Disability = false;
      } else {
        console.log("Disable car");
        myData.Disability = true;
      }
      makeTable();
    });
};

const checkRecall = () => {
  const lpr = document.getElementById("lpr").value;

  fetch(reCall + lpr)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length == 0 ? null : data.result.records[0]
    )
    .then((data) => {
      if (data == null) {
        console.log("Didn't have a recall");
      } else {
        // console.log(records[10]);
      }
    });
};

const makeTable = () => {
  var data = "";
  data += `
            <tr>
                <td>${myData.type}</td>
                <td>${
                  myData.licenseStatus ? myData.licenseStatus : "No data"
                }</td>
                <td>${myData.Disability ? "Yes" : "No"}</td>
            </tr>
    `;
  document.getElementById("res").innerHTML = data;
};
