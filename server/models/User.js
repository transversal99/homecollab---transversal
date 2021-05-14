const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../database')

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 255
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 255
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 255
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 80
    },
    profile_img: {
      type: DataTypes.BLOB('large'),
      allowNull: false,
    },
    cover_img: {
      type: DataTypes.BLOB('large'),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      max:1000
    },
    recent_connexion: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: NOW
    }
  }, {
    // Other model options go here
});

module.exports = User