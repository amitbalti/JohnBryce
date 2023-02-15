const url = "https://restcountries.com/v3.1/all";
let allCountries = [];
// let totalCountries = 0;
let totalPopulation = 0;
let avgPopulation = 0;
// let myNewCountries = {};
let myCountries = 2;
const myRegions = {};
const myCurrencies = {};

$(async () => {
  allCountries = await $.get(url);
  $("totCountries").html(myCountries);
  getCountriesData(myCountries);
});

const getCountriesData = (total) => {
  // Countries
  $("#countryData").html("");
  for (let counter = 0; counter < total; counter++) {
    const randomNum = Math.floor(Math.random() * allCountries.length);
    $("#countryData").append(`
                          <tr class="Box">
                            <td>${allCountries[randomNum].name.common}</td>
                            <td>${allCountries[randomNum].population}</td>
                          </tr>
                      `);

    // Num Countries stats
    $("#totCountries").html(myCountries);

    // Population stats
    totalPopulation += allCountries[randomNum].population;
    $("#totalPop").html(totalPopulation);

    // Average population stats
    avgPopulation += allCountries[randomNum].population / myCountries;
    $("#avgPop").html(avgPopulation);

    // Regions
    if (myRegions[allCountries[counter].region] == null) {
      myRegions[allCountries[counter].region] = 1;
    } else {
      myRegions[allCountries[counter].region] += 1;
    }

    let regionTable = "";
    for (singleRegion in myRegions) {
      regionTable += `<tr><td>${singleRegion}</td><td>${myRegions[singleRegion]}</td></tr>`;
    }
    $("#regionData").html(regionTable);

    // Currencies
    // if (myCurrencies[allCountries[counter].currencies] == null) {
    //   myCurrencies[allCountries[counter].currencies] = 1;
    // } else {
    //   myCurrencies[allCountries[counter].currencies] += 1;
    // }

    // let currencyTable = "";
    // for (singleCurrency in myCurrencies) {
    //   //   currencyTable += `<tr><td>${singleCurrency}</td><td>${myCurrencies[singleCurrency]}</td></tr>`;
    //   currencyTable += singleCurrency;
    // }
    // $("#currencyData").html(currencyTable);
    // console.log($("#currencyData").html(currencyTable));
  }
};
// const getRegionData = (total) => {
//   $("#countryData").html("");
//   for (let counter = 0; counter < total; counter++) {
//     const randomNum = Math.floor(Math.random() * allCountries.length);
//     $("#countryData").append(`
//                             <tr class="Box">
//                               <td>${allCountries[randomNum].region}</td>
//                               <td>${allCountries[randomNum].population}</td>
//                             </tr>
//                         `);
//   }
// };

// totalPopulation += allCountries[randomNum].population;

// if (myRegions[allCountries[randomNum].region] == null) {

//   myRegions[allCountries[randomNum].region] = 1;
// } else {

//   myRegions[allCountries[randomNum].region] += 1;
// }

//   $("#total").html(totalPopulation);
//   $("#totalArea").html(totalArea);

//   makeHorTable();
//   makeVerTable();

/** */
// const allUrl = "https://restcountries.com/v3.1/all";
// let allCountries = [];
// let totalCountries = 0;

// $(async () => {
//   allCountries = await $.get(allUrl);
// });

// $(
//   async function () {
//     console.log(
//       $("#allCountries").on("click", (value) => {
//         $("#totCountries").html(`${value.target.value}`);
//       })
//     );
//   }

//   $("#allCountries").on("click", (value) => {
//     // totalCountries += $("#totCountries").html(`${value.target.value}`);
//     // getData(value.target.value);
//   });
// );

// const getData = (total) => {
//   $("#container").html("");
//   for (let counter = 0; counter < total; counter++) {
//     const randomNum = Math.floor(Math.random() * allCountries.length);
//     $("#container").append(`
//                     <div class="Box">
//                         ${allCountries[randomNum].name.common}<br/>
//                         ${allCountries[randomNum].population}<br/>
//                     </div>
//                 `);
//   }
// };
// // console.log(getData());
// // const getCountriesData = (total) => {
// //   $("#container").html("");
// //   for (let counter = 0; counter < total; counter++) {
// //     const randomNum = Math.floor(Math.random() * allCountries.length);
// //     $("#container").append(`
// //                     <tr class="Box">
// //                         <td>${allCountries[randomNum].name.common}</td>
// //                         <td>${allCountries[randomNum].population}</td>
// //                     </tr>
// //                   `);
// //   }
// // };

// // const getRegionsData = (total) => {
// //   $("#container").html("");
// //   for (let counter = 0; counter < total; counter++) {
// //     const randomNum = Math.floor(Math.random() * allCountries.length);
// //     $("#container").append(`
// //                       <tr class="Box">
// //                           <td>${allCountries[randomNum].name.common}</td>
// //                           <td>${allCountries[randomNum].population}</td>
// //                       </tr>
// //                     `);
