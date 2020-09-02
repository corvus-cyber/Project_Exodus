var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var exoSe = require("../models/exodus_scenario_model");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log("YOU BEEN SERVED"+req+res)
});



// Export routes for server.js to use.
module.exports = router;
