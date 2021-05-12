const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Objective = sequelize.define('Objective', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    // Other model options go here
});

module.exports = Objective