const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Message = sequelize.define('Message', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    indexes: [
      // Create a unique index on email
  //   unique: true,
  //   fields: ['UserHasUserSenderId']
  // },
  // {
  //   unique: true,
  //   fields: ['UserHasUserSenderId']
  // } 
]
});

module.exports = Message