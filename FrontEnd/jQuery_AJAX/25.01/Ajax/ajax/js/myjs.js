let coffee = "https://coffee.alexflipnote.dev/random.json";
let allCoffees = [];

$(function () {
  $("#myRange").on("input", (value) => {
    $("#totalCoffees").html(`${value.target.value}`);
    getData(value.target.value);
  });
});

$(async function () {
  for (var i = 0; i < 30; i++) {
    let data = await $.get(coffee);
    // console.log(data);
    allCoffees.push(data.file);
  }
  $("#totalCoffees").html("Ready");
});

const getData = async (total) => {
  $("#coffeeContainer").html("");
  for (let counter = 0; counter < total; counter++) {
    // let data = await $.get(coffee);
    const randomNum = Math.floor(Math.random() * allCoffees.length);

    $("#coffeeContainer").append(`
                      <div class="Box">
                          <img src=${allCoffees[randomNum]} width=100 />
                      </div>
    `);
  }
};

//   let url =
//     "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=1113334";
//   const getCar = async () => {
//     let response = await fetch(url)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };
//   getCar();

// let coffee = "https://coffee.alexflipnote.dev/random.json";
// let allCoffees = [];
//   const getRandomCoffee = async () => {
//     let response = await fetch(coffee)
//       .then((response) => response.json())
//       .then((data) => console.log("first way: " + data.file));
//   };
//   getRandomCoffee();

//   // Lines 25-31 by using jQuery
// $(async function () {
// $.get(coffee, (data) => console.log("second way: " + data.file));
//   allCoffees = await $.get(coffee, (data) => data.file);
//   console.log(allCoffees);
// });

// const getData = () => {
//   $("coffeeContainer").html("");
//   for (let i = 0; i < allCoffees.length; i++) {
//     const randomNum = Math.floor(Math.random() * allCoffees.length);
//     $("#coffeeContainer").append(`
//             <div>
//                 <img src=${allCoffees[randomNum]} width=100/>
//             </div>
//           `);
//   }
// };

//   $(function () {
//     getData();
//   });

//   $(async function () {
//     allCoffees = await $.get(coffee);
//     console.log(allCoffees);
//   });

//   const getData = (total) => {
//     $("#coffeeContainer").html("");
//     for (let counter = 0; counter < total; counter++) {
//       const randomNum = Math.floor(Math.random() * allCoffees.length);
//       $("#coffeeContainer").append(`
//                 <div class="Box">
//                     <img src=${allCoffees[randomNum]} width=100 /><br/>
//                 </div>
//             `);
//     }
//   };
