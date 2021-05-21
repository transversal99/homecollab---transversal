const sequelize = require('./database')

const User = require("./models/User")
const Task = require("./models/Task")
const Message = require('./models/Message')
const Form = require('./models/Form')
const Answer = require('./models/Answer')
const Videoroom = require('./models/Videoroom')
const Channel = require('./models/Channel')
const VideoroomMessage = require('./models/VideoroomMessage')
const Playlist = require('./models/Playlist')
const Song = require('./models/Song')
const VideoroomHasUser = require('./models/VideoroomHasUser')

// Différentes relations entres les tables de la dbb

User.hasMany(Task)
Task.belongsTo(User)

User.hasMany(Form)
Form.belongsTo(User)

Form.hasMany(Answer)
Answer.belongsTo(Form)

User.belongsToMany(User, {
    through: {
        unique: false,
        model: Message
    },
    as: 'receiver'
})


Videoroom.belongsTo(Channel)
Channel.hasOne(Videoroom)
VideoroomMessage.belongsTo(Videoroom)
Videoroom.hasMany(VideoroomMessage)

User.belongsToMany(Videoroom, {
    through: VideoroomHasUser
})
Videoroom.belongsToMany(User, {
    through: VideoroomHasUser
})

User.hasMany(Playlist)
Playlist.belongsTo(User)
Playlist.belongsToMany(Song, {
    through: 'Playlist_has_song'
})
Song.belongsToMany(Playlist, {
    through: 'Playlist_has_song'
})

User.belongsToMany(User, {
    through: {
        unique: false,
        model: VideoroomMessage
    },
    as: 'sender',
})

VideoroomMessage.belongsTo(Videoroom)
Videoroom.hasMany(Videoroom)

sequelize.sync({alter:true})