import Application from "./cls/Application";
import Mobile from "./cls/Mobile";

// Like appStore
let availableApps: Application[] = [
  new Application("Candy Crush", 100000000000, 50, 4),
  new Application("Picross", 200, 55, 2),
  new Application("SkyWind", 200, 50, 5),
];

let mobile = new Mobile("1.3.4", false, 200);
let addedApp: boolean = false;
do {
  const randomNum = Math.floor(Math.random() * availableApps.length);
  addedApp = mobile.installApp(availableApps[randomNum]);
} while (addedApp);
console.log(mobile.printMobileInfo());
