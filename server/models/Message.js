const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Message = sequelize.define('Message', {
    // Model attributes are defined here
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
});

module.exports = Message