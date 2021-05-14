const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const UserhasUser = sequelize.define('User_has_user', {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }, 
    receiverId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false
    }
  }, {
    indexes: [
        // Create a unique index on email
    { 
      unique: true, 
      fields: ['UserId']
    },
    {
      unique: true,
      fields: ['receiverId']
    }
]
});

module.exports = UserhasUser