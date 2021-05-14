const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Form = sequelize.define('Form', {
    // Model attributes are defined here
  }, {
    // Other model options go here
});

module.exports = Form