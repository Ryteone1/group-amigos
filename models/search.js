module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define("Search", {
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, {
    classMethods: {
      associate: function(models) {
        Search.hasOne(models.User);
      }
    }
  });
  return Search;
};
