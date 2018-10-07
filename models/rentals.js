module.exports = function(sequelize, DataTypes) {
  var Rentals = sequelize.define("Rentals", {
    rental_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    date_start: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_finish:{
      type: DataTypes.STRING,
      allowNull: false
    },
    rental_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    orderTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "open"
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "order"
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Rentals.associate = function(models) {
    // Associating clients with rentals
    Rentals.hasMany(models.Clients, {
      onDelete: "cascade"
    });
    Rentals.hasMany(models.RentalsDetails,{
      onDelete: "cascade"
    });
  };



  return Rentals;
};
