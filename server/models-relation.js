const sequelize = require('./database')

const User = require("./models/User")
const Objective = require("./models/Objective")
const Message = require('./models/Message')
const UserhasUser = require('./models/UserhasUser')

// Différentes relations entres les tables de la dbb

User.hasMany(Objective)
Objective.belongsTo(User)
// Message.belongsTo(UserhasUser, {
//     foreignKey: 'user_has_user_sender_id'
// })
// Message.belongsTo(UserhasUser, {
//     foreignKey: 'user_has_user_receiver_id'
// })

// database connexion

sequelize.sync({alter:true})