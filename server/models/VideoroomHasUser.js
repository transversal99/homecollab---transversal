const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const VideoroomHasUser = sequelize.define('Videoroom_has_user', {
  VideoroomChannelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  VideoroomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  }, {
    indexes: [
        // Create a unique index on email
    {
      unique: true,
      fields: ['VideoroomChannelId']
    },
//     {
//         unique: true,
//         fields: ['receiverId']
//     },
]
});

module.exports = VideoroomHasUser