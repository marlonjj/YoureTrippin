module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    return Schedule;
  };
