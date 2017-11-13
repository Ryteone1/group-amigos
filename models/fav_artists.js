// DEVELOPMENT CODE ========================
module.exports = function(sequelize, DataTypes) {
  var FavArtists = sequelize.define("FavArtists", {
    fav_artist1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fav_artist2: {
      type: DataTypes.STRING
    },
    fav_artist3: {
      type: DataTypes.STRING
    },
    fav_artist4: {
      type: DataTypes.STRING
    },
    fav_artist5: {
      type: DataTypes.STRING
    }
  
  });

  FavArtists.associate = function(models) {
        FavArtists.belongsTo(models.User);
      }

  return FavArtists;
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


