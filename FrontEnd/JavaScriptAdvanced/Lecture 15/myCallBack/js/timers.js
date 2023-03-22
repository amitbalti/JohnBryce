var clock = setInterval(() => {
  document.getElementById("myTime").innerHTML = new Date().toLocaleTimeString();
}, 1000);

function stopClock() {
  clearInterval(clock);
}

// setInterval(()=>{commands to run},time in milliseconds)
// clearInterval(id of interval)

var myTimeOut = setTimeout(() => {
  console.log("Can not connect to server....");
}, 5000);
console.log("Connecting to server...");

var runDemo = setTimeout(() => {
  clearTimeout(myTimeOut);
  console.log("Server was connected....");
}, 2000);
