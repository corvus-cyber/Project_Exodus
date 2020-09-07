var db = require("../models");
var Highscore = require("../models/highscore.js");
var express = require("express");
var router = express.Router();


//route to the "exodus" title page
router.get("/", function (req, res) {
    res.render("index");
})

router.get("/highscore", function (req, res) {
    db.Highscore.findAll({
        order: [ ['score',  'ASC'] ] 
    }).then(function (data) {
        data = JSON.parse(JSON.stringify(data))
        // console.log(data);
        res.render("highscore", { highscore_data: data });
    })
})

router.post("/highscore", function (req, res) {
    db.Highscore.create({
        username: req.body.username,
        score: req.body.score
      }).then(function(data) {
        res.json(data);
      });
})


module.exports = router;