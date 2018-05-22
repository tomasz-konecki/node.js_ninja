var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello there...");
});

server.listen(3000, "127.0.0.1");
console.log("server listening on port 3000");
