var express = require("express");

var exphbs = require("express-handlebars");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
var Highscore = require("./models/highscore.js");

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes

var routes = require("./routes/html-routes.js");
app.use(routes);
//require("./routes/api-routes.js")(app);

// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   });
// });

db.sequelize.sync();
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

// db.Highscore.create({
//   username: "Raj",
//   score: 10
// })

// db.Highscore.create({
//   username: "Wyatt Hancock",
//   score: 5
// })