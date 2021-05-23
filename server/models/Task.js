const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Task = sequelize.define('Task', {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
});

module.exports = Task