module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 40]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 40]
        }
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 40]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 40]
        }
      },
      preferences: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    return User;
  };
