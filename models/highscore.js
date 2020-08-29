var Sequelize = require("sequelize");

var sequelize = require("../config/config.json")

// module.exports = function(sequelize, DataTypes) {
    var Highscore = sequelize.define("Highscore", {
      // The email cannot be null, and must be a proper email before creation
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },

      score: {
          type: Sequelize.INTEGER,
        allowNull: false
      }

    });

//   };
  
  Highscore.sync();

  module.exports = Highscore;
