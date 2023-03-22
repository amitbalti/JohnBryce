let coffee = "https://coffee.alexflipnote.dev/random.json";
const getRandomCoffee = async () => {
  let randomImg = async () => {
    for (i = 0; i < 6; i++) {
      let response = await fetch(coffee)
        .then((response) => response.json())
        .then((data) => console.log(data.file));
    }
  };

  document.getElementById("coffee-images").innerHTML = `<img src='${coffee}'/>`;
};
getRandomCoffee();
// $.get(coffee, (data) => {
for (i = 0; i < 6; i++) {
  console.log(data[Math.floor(Math.random() * data.length + 1)].files);
}
// document.getElementById("coffee-images").innerHTML = `<img src='${}'/>`;
// });
