const express = require('express')
const router = express.Router()
const { Op } = require("sequelize");
const socket = require('socket.io');

const Message = require('../models/Message')
const User = require('../models/User')

// Get last Message and all infos 
router.get('/messages/:id', (req, res) => {
    let id = req.params.id
    User.findAll({
        where: {
            id : id
        },
        include: {
            model: User,
            as: 'receiver',
            // where: {
            //     id: 1,
            // }
        }
    }).then((messages) => {
        res.json({status: 200, data: messages})
    })
})

// Get all messages from a specific user
router.get('/messages/user/:id/:receiverId', (req, res) => {
    console.log(req.params)
    Message.findAll({
        where: {
            [Op.or]: [
                {receiverId: req.params.id},
                {receiverId: req.params.receiverId}
            ]
        },
        include: []
    }).then((users) => {
        res.json({status: 200, data: users})
    })
    
})

router.post('/messages/user/:id', (req, res) => {
    Message.create({
        UserId: req.params.id,
        receiverId: req.body.receiverId,
        message: req.body.message,
    }).then((message) => {
        req.io.emit("MESSAGE-CREATED", message)
        res.json({status:201, data:message})
    })
})

// router.put('/tasks/:id(\\d+)', (req, res) => {
//     // Solution 1
//     Task.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then((task) => {
//         if(task != null) {
//             task.update({
//                 finished: true
//             }).then((task) => {
//                 res.json({status:200, data: task})
//             })
//         } else {
//             res.json({status:404, data: "La tâche n'existe pas !!!"})
//         }
//     }
// )})

module.exports = router