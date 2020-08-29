module.exports = function(sequelize, DataTypes) {
    var Highscore = sequelize.define("Highscore", {
      // The email cannot be null, and must be a proper email before creation
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },

      score: {
          type: DataTypes.INTEGER,
        allowNull: false
      }

    });

    return Highscore;
  };