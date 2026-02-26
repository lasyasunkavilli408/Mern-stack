const express = require("express");
const path = require("path");
const app = express();

//Set EJS as template engine
app.set("view engine", "ejs");

//Optional: Set views folder manually
app.set("views", path.join(__dirname, "views"));

//Route
app.get("/", (req, res) => {
	const user = "Akshita";
	const marks = 95;

	res.render("home", {
		name: user,
		score: marks
	});	
});

//Start server
app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
