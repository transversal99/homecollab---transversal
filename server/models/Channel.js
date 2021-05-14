const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../database')

const Channel = sequelize.define('Channel', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 255
    }
  }, {
    // Other model options go here
});

module.exports = Channel