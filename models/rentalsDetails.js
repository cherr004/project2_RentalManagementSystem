module.exports = function(sequelize, DataTypes) {
  var RentalsDetails = sequelize.define("RentalsDetails", {
    rentalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    productQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    productTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  RentalsDetails.associate = function(models) {
    // Associating clients with rentals
    RentalsDetails.belongsTo(models.Rentals, {});
  };



  return RentalsDetails;
};
