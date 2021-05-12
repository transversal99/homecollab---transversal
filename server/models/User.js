const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      max:1000
    }
  }, {
    // Other model options go here
});

module.exports = User