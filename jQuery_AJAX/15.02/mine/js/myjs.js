const url = "https://restcountries.com/v3.1/all";
let allCountries = [];
let totalPopulation = 0;
let totalArea = 0;
// let totalEurope = 0;
// let totalAsia = 0;
// let totalAfrica = 0;
// let totalAmericas = 0;
// let totalOceania = 0;
// let totalAntarctica = 0;
let myRegions = {};
const countries = 5;

$(async function () {
  allCountries = await $.get(url);
  $("#totalCountries").html(countries);
  getData(countries);
});

// Shown as list:
// const getData = (total) => {
//   $("#container").html("");
//   for (let counter = 0; counter < total; counter++) {
//     const randomNum = Math.floor(Math.random() * allCountries.length);
//     $("#container").append(`
//                     <div class="Box">
//                         <img src=${allCountries[randomNum].flags.png} width=100 /><br/>
//                         ${allCountries[randomNum].name.common} <br/>
//                         ${allCountries[randomNum].capital} <br/>
//                         ${allCountries[randomNum].population} <br/>
//                         ${allCountries[randomNum].continents} <br/>
//                         ${allCountries[randomNum].area}
//                     </div>
//                 `);
//     totalPopulation += allCountries[randomNum].population;
//     // totalArea += Math.sqrt(allCountries[randomNum].area);
//     totalArea += allCountries[randomNum].area;
//   }
//   $("#total").html(totalPopulation);
//   $("#totalArea").html(totalArea);
// };

// Shown as Table:
const getData = (total) => {
  $("#countriesData").html("");
  for (let counter = 0; counter < total; counter++) {
    const randomNum = Math.floor(Math.random() * allCountries.length);
    $("#countriesData").append(`
                  <tr class="Box">
                      <td><img src="${allCountries[randomNum].flags.png}" width=100/></td>
                      <td>${allCountries[randomNum].name.common}</td>
                      <td>${allCountries[randomNum].capital}</td>
                      <td>${allCountries[randomNum].population}</td>
                      <td>${allCountries[randomNum].continents}</td>
                      <td>${allCountries[randomNum].area}</td>
                  </tr>
                `);
    totalPopulation += allCountries[randomNum].population;
    // totalArea += Math.sqrt(allCountries[randomNum].area);
    totalArea += allCountries[randomNum].area;

    // console.log(allCountries[randomNum].region);
    //check if the data inside the object literal is null
    if (myRegions[allCountries[randomNum].region] == null) {
      // console.log("New region");

      // if it's null, it's new region, and we can set the number to 1, since it's the first one.
      myRegions[allCountries[randomNum].region] = 1;
    } else {
      // console.log("Existing region");

      // if the region already exists in the object literal, we can add 1 to count it.
      myRegions[allCountries[randomNum].region] += 1;
    }

    // if (allCountries[randomNum].region === "Americas") {
    //   totalAmericas++;
    // } else if (allCountries[randomNum].region === "Europe") {
    //   totalEurope++;
    // } else if (allCountries[randomNum].region === "Asia") {
    //   totalAsia++;
    // } else if (allCountries[randomNum].region === "Africa") {
    //   totalAfrica++;
    // } else if (allCountries[randomNum].region === "Oceania") {
    //   totalOceania++;
    // } else if (allCountries[randomNum].region === "Antarctic") {
    //   totalAntarctica++;
    // }
  }
  $("#total").html(totalPopulation);
  $("#totalArea").html(totalArea);

  // console.log(myRegions);

  // $("#totalAmerica").html(totalAmericas);
  // $("#totalAfrica").html(totalAfrica);
  // $("#totalAsia").html(totalAsia);
  // $("#totalEurope").html(totalEurope);
  // $("#totalOceania").html(totalOceania);
  // $("#totalAntarctica").html(totalAntarctica);
  makeHorTable();
  makeVerTable();
};

const makeHorTable = () => {
  let tableHor = "<table>";
  tableHor += "<thead>";

  // This is checking for each region
  for (singleRegion in myRegions) {
    // console.log(region);
    // console.log(singleRegion, ":", myRegions[singleRegion]);
    tableHor += `<th>${singleRegion}</th>`;
  }
  tableHor += "</thead>";
  tableHor += "<tbody><tr>";

  for (singleRegion in myRegions) {
    tableHor += `<td>${myRegions[singleRegion]}</td>`;
  }
  tableHor += "</tr></tbody>";
  tableHor += "</table>";

  $("#tableHor").html(tableHor);
};

const makeVerTable = () => {
  let tableVer = "<table>";

  for (singleRegion in myRegions) {
    tableVer += `
      <tr><td><b>${singleRegion}</b></td><td>${myRegions[singleRegion]}</td></tr>
    `;
  }
  tableVer += "</table>";
  $("#tableVer").html(tableVer);
};
