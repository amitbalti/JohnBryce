const coinsUrl = "https://api.coingecko.com/api/v3/coins/list";
const coinsRateUrl = "https://api.coingecko.com/api/v3/coins";

async function getAllCoins() {
  return await $.get(coinsUrl);
}

async function getAllCoinsRate() {
  return await $.get(coinsRateUrl);
}

// async function findCoins(name) {
//   return await $.get(coinsUrl + name);
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

    /* Trying to make the data of the info button to show USD, EUR, and ILS current rates */
    // let market_data = {};

    // if (coin.market_data) {
    //   Object.keys(coin.market_data).forEach((price) => {
    //     market_data[price] = (market_data[price] || 0) + 1;
    //   });
    // }

    // $("#currentPrice").html("");
    // Object.keys(market_data).forEach((price) => {
    //   $("#currentPrice").append(`
    //                            <h5>${price.usd}</h5>
    //                            <h5>${price.eur}</h5>
    //                            <h5>${price.ils}</h5>
    //                      `);
    // });

    console.log(parseInt(coin.data_market.current_price.usd));

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
                <div class="collapse" id="collapseExample_${i}">
                    <div class="card card-body" id="currentPrice_${i}">
                    </div>
                </div>
        </div>`
    );

    // Make API call to get current coin rate in USD, EUR, and ILS
    let coinRatesUrl = `${coinsRateUrl}/${coin.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
    let coinRates = await $.get(coinRatesUrl);

    // Append current coin rate to the corresponding "currentPrice" div
    $(`#currentPrice_${i}`).append(`
      <p>Current Rate:</p>
      <ul>
        <li>USD: ${coinRates.market_data.current_price.usd}</li>
        <li>EUR: ${coinRates.market_data.current_price.eur}</li>
        <li>ILS: ${coinRates.market_data.current_price.ils}</li>
      </ul>
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
      Please select the coin to be removed: <br/><br/>
         <select id="removedCoin">
           <option>${checkedIds[0]}</option>
           <option>${checkedIds[1]}</option>
           <option>${checkedIds[2]}</option>
           <option>${checkedIds[3]}</option>
           <option>${checkedIds[4]}</option>
           <option>${checkedIds[5]}</option>
         </select>
         `);
      $("#coinModalLabel").modal({ backdrop: "static", keyboard: false });
    }
  });
};

const removeCoin = () => {
  //   console.log("clicked");
  //   console.log($("#removedCoin").val());
  let removedId = $("#removedCoin").val();
  $("#" + removedId).prop("checked", false);
  $("#coinModalLabel").modal("hide");
};

//   let selected = $('input[type="checkbox"]');
//   selected.change(function () {
//     let checked = selected.filter(":checked");
//     console.log(checked.length);

//     if (checked.length > maxOptions) {
//       console.log(checked);
//       checked.each(() => {
// console.log($(this)[0].id);

// console.log(checkedIds);
// $(".modal-body").html(`
// <select>
//   <option>${element.id[0]}</option>
//   <option>${element.id[1]}</option>
//   <option>${element.id[2]}</option>
//   <option>${element.id[3]}</option>
//   <option>${element.id[4]}</option>
// </select>
// `);
//   });
// };
//   selected.not(":checked").prop("disabled", true);
//   $("#maxOptions").val(maxOptions);
//   let coinModalBody = $("<div>");
//   checked.each(function (index, element) {
//     if (index >= maxOptions) {
//       $(element).prop("checked", false);
//       coinModalBody.append($("<p>").text($(element).val()));
//     }
//   });
//   let coinModal = $("<div>").addClass("modal fade").appendTo($("body"));
//   let coinModalDialog = $("<div>")
//     .addClass("modal-dialog")
//     .appendTo($(coinModal));
//   let coinModalContent = $("<div>")
//     .addClass("modal-content")
//     .appendTo(coinModalDialog);
//   let coinModalHeader = $("<div>")
//     .addClass("modal-header")
//     .appendTo(coinModalContent);
//   let coinModalTitle = $("<h5>")
//     .addClass("modal-title")
//     .text("Too many options selected")
//     .appendTo(coinModalHeader);
//   let coinModalCloseButton = $("<button>")
//     .addClass("close")
//     .attr("data-dismiss, 'modal'")
//     .html("&times;")
//     .appendTo(coinModalHeader);
//   let coinModalBodyDiv = $("<div>")
//     .addClass("modal-body")
//     .append($("<p>").text("Please unselect some options:"))
//     .appendTo(coinModalContent);
//   coinModalBody.appendTo(coinModalBodyDiv);
//   coinModal.modal("show");
// } else {
//   selected.not(":checked").prop("disabled", false);
//   $("#maxOptions").val("");
// }
// $("#optionCountValue").text(maxOptions - checked.length);
//   });
// };

// setTimeout(() => {}, 5000);

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
