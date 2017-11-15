// DEVELOPMENT CODE ========================
module.exports = function(sequelize, DataTypes) {
  var FavArtist = sequelize.define("FavArtist", {
    fav_artist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    search_hits: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }    
      
  });

  return FavArtist;
};


