var fs = require("fs");

fs.mkdir("stuff", function() {
  fs.readFile("readMe.txt", "utf8", function(err, data) {
    fs.writeFile("./stuff/writeMe.txt", data);
  });
});

// removing directiory:
// fs.rmdirSync("stuff");

fs.unlink("./stuff/writeMe.txt", function() {
  fs.rmdir("stuff");
});
