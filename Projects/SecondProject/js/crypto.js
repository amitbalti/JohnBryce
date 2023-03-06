const coinsUrl = "https://api.coingecko.com/api/v3/coins/list";
const coinsRateUrl = "https://api.coingecko.com/api/v3/coins";

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
  $("#progress-bar").show(); // show progress bar
  return await $.get(coinsRateUrl, {
    beforeSend: function () {
      $("#progress-bar").show();
    },
    complete: function () {
      $("#progress-bar").hide();
    },
  });
}

// async function findCoins(coinName) {
//   return await $.get(coinsUrl + coinName);
// }

const getCoinsData = async (data) => {
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

  // Names:
  $("#allCoins").html("");
  //   for (let i = 0; i < 100; i++) {
  for (let i = 0; i < 6; i++) {
    let coin = data[i];

    $("#allCoins").append(
      `<div class="custom-control custom-switch switchBtn">
                <label class="switch">
                    <input type="checkbox" id="${limit(coin.symbol, 5)}"/>
                    <span class="slider round"></span>
                </label>
                
                <h2>${limit(coin.symbol, 5)}</h2>
                <h5>${limit(coin.name, 10)}</h5>
                
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
    let coinRates = await $.get(coinRatesUrl);

    // Append current coin rate to the corresponding "currentPrice" div
    $(`#currentPrice_${i}`).append(`
    
        <p class="card-title">Current <span class="infoBtnRate">${limit(
          coin.symbol,
          5
        )}</span> Rate:</p>
        
        <h5><span class="infoBtnRate">USD: </span> ${
          coinRates.market_data.current_price.usd
        }$</h5>
        <h5><span class="infoBtnRate">EUR: </span>
         ${coinRates.market_data.current_price.eur}€</h5>
        <h5><span class="infoBtnRate">ILS: </span> ${
          coinRates.market_data.current_price.ils
        }₪</h5>
    `);
  }
  howMany();
};

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
      console.log("Here");
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

const removeCoin = () => {
  console.log("clicked");
  console.log($("#removedCoin").val());
  let removedId = $("#removedCoin").val();
  $("#" + removedId).prop("checked", false);
  $("#coinModal").modal("hide");
};

$(async function () {
  let data = await getAllCoins();
  getCoinsData(data);
  getAllCoinsRate();
});

// $(".searchBtn").click(async function () {
//   // Get the user input
//   let searchTerm = $(".searchInp").val();
//   let data = await findCoins(searchTerm);
//   findCoins(data);
// });
