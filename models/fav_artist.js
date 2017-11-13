// DEVELOPMENT CODE ========================
module.exports = function(sequelize, DataTypes) {
  var FavArtist = sequelize.define("FavArtist", {
    fav_artist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    buytickets: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  
  });

  FavArtist.associate = function(models) {
        FavArtist.belongsTo(models.User);
      }

  return FavArtist;
};


// CODE WE HAD WORKING ON SATURDAY =======

// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define("Burger", {
//     burger_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
  
//   });

//   Burger.associate = function(models) {
//         Burger.belongsTo(models.Customer);
//       }

//   return Burger;
// };


