
var db = require("../models");

var router = express.Router();

var express = require("express");
  
    router.get("/", function (req, res) {
        
            res.render("index");
     
    })



module.exports = router;