
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user: {
      type: DataTypes.STRING,
      // If a customer is to be created, they must have a name
      allowNull: false
    }  
  });

User.associate = function(models) {
    // Associating User with Favorite Artists
    // When a User is deleted, also delete any associated Favorite Artists
    User.hasMany(models.FavArtist, {
      onDelete: "cascade"
    });
  };

  return User;  
};

