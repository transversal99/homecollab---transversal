const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../database')

const Playlist = sequelize.define('Playlist', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 255
    }
  }, {
    // Other model options go here
});

module.exports = Playlist