const getCarTruck = async (carID) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      reject("Error, can't connect to API...");
    }, 5000);

    let myData = new Object();
    try {
      await fetch(urlCar + carID)
        .then((response) => response.json())
        .then(async (data) => {
          if (data.result.records.length > 0) {
            let newCar = data.result.records[0];
            myData.mispar_rechev = newCar.mispar_rechev;
            myData.tozeret_nm = newCar.tozeret_nm;
            myData.kinuy_mishari = newCar.kinuy_mishari;
            myData.tzeva_rechev = newCar.tzeva_rechev;
            myData.shnat_yitzur = newCar.shnat_yitzur;
            myData.tokef_dt = newCar.tokef_dt;
            myData.handicap = await getHandiCap(carID);
          }
        })
        .catch((err) => {
          //   console.log(err);
          reject("URL not found");
        });
    } catch (err) {
      (err) => {
        console.log("Huston, we have a problem:\n" + err);
        reject(err);
      };
    } finally {
      console.log("Close the connection");
    }
    resolve(myData);
  });
};

const getHandiCap = async (carID) => {
  return new Promise((reject, resolve) => {
    var urlTimeOut = setTimeout(() => {
      reject("Error, can't connect to API...");
    }, 5000);

    fetch(urlHandiCap + carID)
      .then((response) => response.json())
      .then((data) => {
        clearTimeout(urlTimeOut);
        resolve(data.result.records.length > 0);
      });
    resolve(true);
  });
};

const getBike = async (carID) => {
  return await fetch(urlBike + carID)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length > 0 ? data.result.records[0] : null
    );
};

const getTruck = async (carID) => {
  return await fetch(urlTruck + carID)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length > 0 ? data.result.records[0] : null
    );
};

const getRecall = (carID) => {
  let returnData = [];
  return new Promise(async (resolve, reject) => {
    var urlTimeOut = setTimeout(() => {
      reject(null);
    }, 5000);
    await fetch(urlRecall + carID)
      .then((response) => response.json())
      .then((data) => {
        if (data.result.records.length > 0) {
          data.result.records.map((item) => {
            let newData = new Object();
            newData.SUG_RECALL = item.SUG_RECALL;
            newData.SUG_TAKALA = item.SUG_TAKALA;
            newData.TEUR_TAKALA = item.TEUR_TAKALA;
            returnData.push(newData);
          });
          clearTimeout(urlTimeOut);
          resolve(returnData);
        }
        reject("Error, can't connect to API...");
      });
  });
};

const getOffRoad = async (carID) => {
  return await fetch(urlOffRoad + carID)
    .then((response) => response.json())
    .then((data) =>
      data.result.records.length > 0 ? data.result.records[0] : null
    );
};
