module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", {
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    client_company: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100]
      }
    },
    client_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
        isEmail: true
      }
    },
    client_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    client_address1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    client_address2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100]
      }
    },
    client_city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    client_state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    client_zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    payment_info: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  Clients.associate = function(models) {
    // Associating clients with s
    // When an clients is deleted, also deletes any associated rentals
    Clients.belongsTo(models.Rentals, {
      onDelete: "cascade"
    });
  };

  return Clients;
};
