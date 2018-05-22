var http = require("http");
var fs = require("fs");

// var server = http.createServer(function(req, res) {
//   console.log("request was made:", req.url);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//   myReadStream.pipe(res);
// });

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "content-Type": "text/html" });
  fs.readFile("index.html", "utf8", function(err, data) {
    res.end(data);
  });
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");
