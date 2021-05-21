const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const VideoroomMessage = sequelize.define('VideoroomMessage', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 300
    },
    VideoroomId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    indexes: [
      // Create a unique index on email
]
});

module.exports = VideoroomMessage