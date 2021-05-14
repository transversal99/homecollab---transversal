const { DataTypes, NOW } = require('sequelize');
const sequelize = require('../database')

const Videoroom = sequelize.define('Videoroom', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 255
    },
    limit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ChannelId: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
  }, {
    // Other model options go here
    indexes: [
      {
        unique: true,
        fields: ['ChannelId']
      }
    ]
});

module.exports = Videoroom