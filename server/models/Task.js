const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Task = sequelize.define('Task', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    // Other model options go here
});

module.exports = Task