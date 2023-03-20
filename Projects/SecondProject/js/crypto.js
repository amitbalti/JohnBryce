const coinsUrl = "https://api.coingecko.com/api/v3/coins/list";
const coinsRateUrl = "https://api.coingecko.com/api/v3/coins";

// local memory cache of the coins data
let data = null;

async function getAllCoins() {
  $("#progress-bar").show(); // show progress bar
  return await $.get(coinsUrl, {
    beforeSend: function () {
      $("#progress-bar").show();
    },
    complete: function () {
      $("#progress-bar").hide();
    },
  });
}

async function getAllCoinsRate() {
  try {
    return await new Promise(function (resolve, reject) {
      $("#progress-bar").show(); // show progress bar
      myPromise.then((result) => {
        // Do something with the result
        $("#progress-bar").show(); // show progress bar
        $.ajax({
          url: coinsRateUrl,
          dataType: "json",
          method: "GET",
          success: function (data_1) {
            $("#progress-bar").hide();
            resolve(data_1);
          },
          error: function () {
            $("#progress-bar").hide();
            reject();
          },
        });
      });
    });
  } catch (error) {
    // Handle the error
    $("#progress-bar").hide();
  }
}

const getCoinsData = async (data) => {
  // Names:
  $("#allCoins").html("");
  // Show the first 100 coins of the api
  for (let i = 0; i < 100; i++) {
    // for (let i = 0; i < 6; i++) {
    let coin = data[i];

    $("#allCoins").append(
      `<div class="custom-control custom-switch switchBtn">
                <label class="switch">
                    <input type="checkbox" id="${coin.symbol}"/>
                    <span class="slider round"></span>
                </label>
                
                <h2>${coin.symbol}</h2>
                <h5>${coin.name}</h5>
                
                <button type="button" class="btn btn-primary moreInfoBtn" data-toggle="collapse" data-target="#collapseExample_${i}" aria-expanded="false" aria-controls="collapseExample_${i}">
                    More Info
                </button>
                <div class="collapse border-light" id="collapseExample_${i}">
                    <div class="card card-body border-info" id="currentPrice_${i}">
                    </div>
                </div>
        </div>`
    );

    // Make API call to get current coin rate in USD, EUR, and ILS
    let coinRatesUrl = `${coinsRateUrl}/${coin.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
    $.get(coinRatesUrl).then((coinRates) => {
      // Append current coin rate to the corresponding "currentPrice" div
      $(`#currentPrice_${i}`).append(`
    
        <p class="card-title">Current <span class="infoBtnRate">${coin.symbol}</span> Rate:</p>
        
        <h5><span class="infoBtnRate">USD: </span> ${coinRates.market_data.current_price.usd}$</h5>
        <h5><span class="infoBtnRate">EUR: </span>
         ${coinRates.market_data.current_price.eur}€</h5>
        <h5><span class="infoBtnRate">ILS: </span> ${coinRates.market_data.current_price.ils}₪</h5>
    `);
    });
  }
  howMany();
};

// This function is meant to limit the number of coins the user can choose to five coins top.
const howMany = () => {
  let maxOptions = 5;
  let selected = $('input[type="checkbox"]');
  selected.change(function () {
    let checkedIds = $("input[type=checkbox]:checked")
      .map(function () {
        return this.id;
      })
      .get();
    if (checkedIds.length > maxOptions) {
      $(".modal-body").html(`
      <span class="modalStyle">Only 5 coins can be selected!</span><br/>
      Please select the coin to be <span class="removed">removed</span>: <br/><br/>
         <select id="removedCoin">
           <option>${checkedIds[0]}</option>
           <option>${checkedIds[1]}</option>
           <option>${checkedIds[2]}</option>
           <option>${checkedIds[3]}</option>
           <option>${checkedIds[4]}</option>
           <option>${checkedIds[5]}</option>
         </select>
         `);
      $("#coinModal").modal({ backdrop: "static", keyboard: false });
    }
  });
};

// This function will open the modal which after choosing which coin we don't want, it will remove it from the chosen coins
const removeCoin = () => {
  let removedId = $("#removedCoin").val();
  $("#" + removedId).prop("checked", false);
  // Add a delay of 500ms before hiding the Modal
  setTimeout(function () {
    $("#coinModal").modal("hide");
  }, 500);
};

// This function will help the user search for the coins using the search bar
const searchCoins = async () => {
  let searchTerm = $(".searchInp").val();
  let data = await fetchCoins();
  let results = data.filter(function (coin) {
    return coin.symbol === searchTerm;
  });
  getCoinsData(results);
  showMain();
  $(".searchInp").val("");
};

// If data is empty then show the 'getAllCoins()' function, if not, set timeout to two minutes and then try again.
const fetchCoins = async () => {
  if (data === null) {
    data = await getAllCoins();
    setTimeout(() => {
      data = null;
    }, 2 * 60 * 1000);
  }
  return data;
};

$(async function () {
  let data = await fetchCoins();
  getCoinsData(data);
  getAllCoinsRate();

  $(".searchBtn").click(searchCoins);
});

// Show home page using onclick on the 'Home' button
const showMain = () => {
  $("#wrapper").removeClass().addClass("coins"); // remove former classes and add new class
};

// Show live reports using onclick on the 'Live Reports' button
const showLiveRepo = () => {
  $("#wrapper").removeClass().addClass("liveRepo"); // remove former classes and add new class

  // Will take the max 5 chosen coins
  let coins = $("input[type=checkbox]:checked")
    .map(function () {
      return this.id.toUpperCase();
    })
    .get();

  // Will add the max 5 chosen coins to the URL as queries
  const url =
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" +
    coins.join(",") +
    "&tsyms=USD";

  let data_points = {}; // data_points will start as an empty object
  // Will map all the coins and will insert it into graphData
  let graphData = coins.map((coin) => {
    let dataPoints = []; // dataPoints will start as an empty object
    data_points[coin] = dataPoints; // For each data_point using specified coin, will add a new dataPoint

    return {
      type: "spline", // type of graph
      name: coin, // name of the coin
      showInLegend: true,
      xValueFormatString: "hh:mm:ss",
      dataPoints,
    };
  });

  let options = {
    exportEnabled: true,
    animationEnabled: true,

    axisX: {
      title: "Time",
    },
    axisY: {
      title: "Coin Rate (in USD $)",
      suffix: "$",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
    },
    data: graphData,
  };

  $("#chartContainer").CanvasJSChart(options);

  const displayGraph = () => {
    const now = new Date();

    console.log(url);
    $.get(url, (data) => {
      coins.forEach((coin) => {
        const usdRate = data[coin]?.USD;

        const dataPoint = {
          x: now,
          y: usdRate,
        };

        data_points[coin].push(dataPoint);
      });

      $("#chartContainer").CanvasJSChart().render();
    });
  };

  displayGraph();
  setInterval(() => {
    displayGraph();
  }, 2000);
};

// Show about using onclick on the 'About' button
const showAbout = () => {
  $("#wrapper").removeClass().addClass("about"); // remove former classes and add new class
};
