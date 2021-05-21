const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: false
    }, 
    receiverId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    indexes: [
        // Create a unique index on email
    // { 
    //   unique: false, 
    //   fields: ['UserId']
    // },
    // {
    //   unique: false,
    //   fields: ['receiverId']
    // }
]
});

module.exports = Message