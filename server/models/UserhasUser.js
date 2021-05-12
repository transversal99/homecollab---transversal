const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const UserhasUser = sequelize.define('User_has_User', {
});

module.exports = UserhasUser