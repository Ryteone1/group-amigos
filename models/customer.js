
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer: {
      type: DataTypes.STRING,
      // If a customer is to be created, they must have a name
      allowNull: false
    }  
  });

Customer.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Customer.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  };

  return Customer;  
};

