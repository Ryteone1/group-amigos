
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
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

