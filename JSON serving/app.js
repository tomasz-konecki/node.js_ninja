var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, "127.0.0.1");
console.log("server listening on port 3000");
