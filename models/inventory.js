module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    inventory_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    available_inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    product_image: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    rentalPrice_day: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Inventory.associate = function(models) {
    // Associating rentals with inventory
    Inventory.belongsTo(models.Rentals, {});
  };
  return Inventory;
};
