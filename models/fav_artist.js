
// DEVELOPMENT CODE ========================
module.exports = function(sequelize, DataTypes) {
  var FavArtist = sequelize.define("FavArtist", {
    fav_artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    search_hits: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }    
      
  });

  return FavArtist;
};
