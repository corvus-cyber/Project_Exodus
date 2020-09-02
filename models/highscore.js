module.exports = function(sequelize, DataTypes) {
    var Highscore = sequelize.define("Highscore", {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },

      score: {
          type: DataTypes.INTEGER,
        allowNull: false
      }
    }
    );
    // Highscore.sync({force: true});
    return Highscore;
  };