const coinsUrl = "https://api.coingecko.com/api/v3/coins/list";

async function getAllCoins() {
  return await $.get(coinsUrl);
}

const getCoinsData = (data) => {
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }
  //   const randomSymbol = limit(randomCoin.symbol, 5);
  //   const randomName = limit(randomCoin.name, 10);

  //   $("#cryptoSymbol").html(randomSymbol);
  //   $("#cryptoName").html(randomName);

  //   const greeting = limit("Hello, world!", 6);
  //   console.log(greeting);
  //   let symbols = "";
  //   let names = "";
  // Names:

  $("#allCoins").html("");
  //   for (let i = 0; i < 100; i++) {
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    let coin = data[randomIndex];

    $("#allCoins").append(
      `<div class="custom-control custom-switch switchBtn">
                <label class="switch">
                <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <h2>${limit(coin.symbol, 5)}</h2>
                <h5>${limit(coin.name, 10)}</h5>
                <button type="button" class="btn btn-primary moreInfoBtn">
                    More Info
                </button>
        </div>`
    );
  }
  // How many coins can you select?
  const howMany = () => {
    let maxSelected = 5;
    $(".switch .slider .round").on("click", function () {
      let count = $(
        ".switch .slider .round input[type='checkbox']:checked"
      ).length;

      if (count > maxSelected) {
        $(this).prop("checked", false);
        // alert("You can't check more than 5 coins");
        var selectedCheckboxes = $(
          '#checkbox-container input[type="checkbox"]:checked'
        );
        var checkboxNames = selectedCheckboxes
          .map(function () {
            return $(this).attr("name");
          })
          .get();
        var msg =
          "You can only select " +
          maxSelected +
          " options. Please select which option you want to keep:\n\n";
        for (var i = 0; i < checkboxNames.length; i++) {
          msg += checkboxNames[i] + "\n";
        }
        var selectedCheckboxName = prompt(msg);
        if (selectedCheckboxName) {
          selectedCheckboxes.each(function () {
            if ($(this).attr("name") !== selectedCheckboxName) {
              $(this).prop("checked", false);
            }
          });
        }
      }
    });
  };
  //     let totalChecked = 0;
  //     for (let i = 0; i < coin.length; i++) {
  //       if (coin.selected) {
  //         totalChecked++;
  //       }
  //       if (totalChecked > maxSelected) {
  //         alert("You can't check more than 5 coins");
  //         return false;
  //       }
  //       return true;
  //     }
  //   });
  // };
};

$(async function () {
  let data = await getAllCoins();
  getCoinsData(data);
  //   howMany();
});
