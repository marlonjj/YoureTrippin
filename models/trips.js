module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
      userID: {
        type: DataTypes.INT,
        allowNull: false,
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true,        
      }
    });
    return Trip;
  };
  