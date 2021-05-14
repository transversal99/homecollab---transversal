const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Answer = sequelize.define('Answer', {
    // Model attributes are defined here
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        max: 100
    },
    more_description: {
      type: DataTypes.STRING,
      max: 300
    }
  }, {
    // Other model options go here
});

module.exports = Answer