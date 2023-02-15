const url = "https://restcountries.com/v3.1/all";
let allCountries = [];
let totalPopulation = 0;
// let myCountries = {};
let myCountries = 5;
const myRegions = {};

$(async () => {
  allCountries = await $.get(url);
  $("totCountries").html(myCountries);
  //   getData(myCountries);
  getCountriesData(myCountries);
  //   stats();
  //   $("#allCountries").html(countries);
  //   getData(countries);
  //   $("#allCountries").on("click", (value) => {
  //     $("#totCountries").html(countries);
  //   });
});

const getData = (total) => {
  $("#container").html("");
  for (let counter = 0; counter < total; counter++) {
    const randomNum = Math.floor(Math.random() * allCountries.length);
    $("#container").append(`
                        ${allCountries[randomNum].name.common}
                        ${allCountries[randomNum].population}
                  `);
    // if (myCountries[allCountries[counter]] == null) {
    //   myCountries[allCountries[counter]] = 1;
    // } else {
    //   myCountries[allCountries[counter]] += 1;
    // }
  }
};

// const stats = () => {
//   for (singleCountry in myCountries) {
//     console.log(singleCountry);
//     console.log(myCountries[singleCountry]);
//   }
// };

const getCountriesData = (total) => {
  $("#countryData").html("");
  for (let counter = 0; counter < total; counter++) {
    const randomNum = Math.floor(Math.random() * allCountries.length);
    $("#countryData").append(`
                          <tr class="Box">
                            <td>${allCountries[randomNum].name.common}</td>
                            <td>${allCountries[randomNum].population}</td>
                          </tr>
                      `);

    // Regions
    if (myRegions[allCountries[counter].region] == null) {
      myRegions[allCountries[counter].region] = 1;
    } else {
      myRegions[allCountries[counter].region] += 1;
    }

    let regionTable = "";
    for (singleRegion in myRegions) {
      regionTable += `<tr><td><b>${singleRegion}</b></td><td>${myRegions[singleRegion]}</td></tr>`;
    }
    $("#regionData").html(regionTable);
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
