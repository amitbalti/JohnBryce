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
  for (let i = 0; i < 1; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    let coin = data[randomIndex];

    $("#allCoins").append(
      `<div>
            <h2>${limit(coin.symbol, 5)}</h2>
            <h5>${limit(coin.name, 10)}</h5>
            <button type="button" class="btn btn-primary moreInfoBtn">More Info</button>
      </div>`
    );
  }
};

$(async function () {
  let data = await getAllCoins();
  getCoinsData(data);
});
