import Application from "./cls/Application";

let app = new Application("Apple", 100000000000, 64, 4);
console.log(app.print());
app.changePrice(10);
console.log(app);
