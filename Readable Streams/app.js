var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");

var count = 0;

myReadStream.on("data", function(chunk) {
  count += 1;
  console.log("new chunk received:");
  console.log(chunk);
  console.log("number of chunks received:", count);
});
