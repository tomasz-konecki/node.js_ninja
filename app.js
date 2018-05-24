var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/contact", function(req, res) {
	res.render("contact");
});

app.get("/profile/:name", function(req, res) {
	// console.log(req);
	var profile = {
		name: req.params.name,
		age: 29,
		job: "ninja",
		hobbies: [ "fighting", "eating", "fishing" ]
	};
	res.render("profile", profile);
});

app.listen(3000);
