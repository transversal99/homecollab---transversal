const express = require('express')
const router = express.Router()

const Message = require('../models/Message')
const User = require('../models/User')

router.get('/messages', (req, res) => {
    Message.findAll({
        include: [ User ]
    }).then((messages) => {
        
        res.json({status: 200, data: messages})
    })
})

// router.post('/message', (req, res) => {
//     Task.create({
//         name: req.body.name,
//         finished: false,
//         UserId: req.body.user_id
//     }).then((Tasks) => {
//         res.json({status:201, data:Tasks})
//     })
// })

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