// const totalCountries = 12;
// $(function () {
//   const url = "https://restcountries.com/v3.1/all";
//   let myData = $.get(url, (myData) => {
//     let myResult = "";
//     for (let i = 0; i < 12; i++) {
//       const randomNumber = Math.floor(Math.random() * myData.length);
//       myResult += `
//              <div class="Box">
//                 <img src=${myData[randomNumber].flags.png} width=100 /> <br />
//                 ${myData[randomNumber].capital} <br />
//                 ${myData[randomNumber].name.common} <br />
//                 ${myData[randomNumber].population} <br />
//                 ${myData[randomNumber].continents} <br />
//              </div>
//        `;
//     }
//     $("#container").html(myResult);
//   });
// });

// const total = 70;
const url = "https://restcountries.com/v3.1/all";
let allCountries = [];

$(function () {
  getData();
});

$(function () {
  $("#myRange").on("change", (value) => {
    $("#totalCountries").html(value.target.value);
    getData(value.target.value);
  });
});

const getData = (total) => {
  $("#container").html("");
  for (let i = 0; i < total; i++) {
    // const randomNumber = Math.floor(Math.random() * allCountries.length);
    //  append - will add to the existing
    //     $("#container").append(`
    //                   <div class="Box">
    //                       <img src=${allCountries[randomNumber].flags.png} width=100 height=70/> <br />
    //                        ${allCountries[randomNumber].capital} <br />
    //                        ${allCountries[randomNumber].name.common} <br />
    //                        ${allCountries[randomNumber].population} <br />
    //                        ${allCountries[randomNumber].continents} <br />
    //                     </div>
    //                   `);
    //   }
    $("#container").append(`
                  <div class="Box">
                      <img src=${allCountries[i].flags.png} width=100 height=70/> <br />
                       ${allCountries[i].capital} <br />
                       ${allCountries[i].name.common} <br />
                       ${allCountries[i].population} <br />
                       ${allCountries[i].continents} <br />
                    </div>
                  `);
  }
};

$(async () => {
  allCountries = await $.get(url);
});
