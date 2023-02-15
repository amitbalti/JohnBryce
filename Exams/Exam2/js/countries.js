const url = "https://restcountries.com/v3.1/all";
const searchUrl = "https://restcountries.com/v3.1/name/";

async function getAllCountries() {
  return await $.get(url);
}

async function findCountries(name) {
  return await $.get("https://restcountries.com/v3.1/name/" + name);
}
const getCountriesData = (data) => {
  let totCountries = 0;
  let totalPopulation = 0;
  let regions = {};
  let currencies = {};

  // Countries
  $("#countryData").html("");
  for (let counter = 0; counter < data.length; counter++) {
    let item = data[counter];
    totCountries++;
    totalPopulation += item.population;

    let region = item.region;
    regions[region] = (regions[region] || 0) + 1;

    if (item.currencies) {
      Object.keys(item.currencies).forEach((currency) => {
        currencies[currency] = (currencies[currency] || 0) + 1;
      });
    }

    $("#countryData").append(`
                          <tr class="Box">
                            <td>${item.name.common}</td>
                            <td>${item.population}</td>
                          </tr>
                      `);
  }

  // Regions
  $("#regionData").html("");
  Object.keys(regions).forEach((region) => {
    let numCountries = regions[region];

    $("#regionData").append(`
                          <tr class="Box">
                            <td>${region}</td>
                            <td>${numCountries}</td>
                          </tr>
                      `);
  });

  // Currencies
  $("#currencyData").html("");
  Object.keys(currencies).forEach((currency) => {
    let numCountries = currencies[currency];

    $("#currencyData").append(`
                           <tr class="Box">
                             <td>${currency}</td>
                             <td>${numCountries}</td>
                           </tr>
                       `);
  });

  // Num Countries stats
  $("#totCountries").html(totCountries);

  // Population stats
  $("#totalPop").html(totalPopulation);

  // Average population stats
  let avgPopulation = totalPopulation / totCountries;
  $("#avgPop").html(avgPopulation);
};

// When clicking on All / search buttons
$(function () {
  // Define the function to handle the "All" button click event
  $("#allCountries").click(async function () {
    let data = await getAllCountries();
    getCountriesData(data);
  });

  $("#searchBtn").click(async function () {
    // Get the user input
    let searchTerm = $("#searchInput").val();
    let data = await findCountries(searchTerm);
    getCountriesData(data);
  });
});
