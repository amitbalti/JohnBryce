const banner = require("./banner"); // Something I wrote
const http = require("http"); // Something I installed

console.log(banner.getBanner());
console.log("server ip : 172.20.10.2");
console.log("server port : 4578");

// web server, code 200 OK, text, port, msg, req/res, tcp/ip (all the communication)

http
  // web server
  .createServer((request, response) => {
    //  code 200 OK
    response.writeHead(404, {
      "Content-type": "text-plain", // text // The content type that I am sending
    });
    response.write("Matan and Hila, sitting on a tree, .........\n");
    response.end("I am a server at IP 172.20.10.2 - my phone ip"); // msg
  })
  .listen(4578); // port
