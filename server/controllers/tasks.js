const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Task = require('../models/Task')

// Rest API User Routes

// GET ALL USERS
router.get('/tasks', (req, res) => {
    Task.findAll({
        include: [{
            model: User,
            attributes: ['id']
        }]
    }).then((users) => {
        
        res.json({status: 200, data: users})
    })
})

// Get a specific Task
router.get('/tasks/:id(\\d+)', (req, res) => {
    Task.findOne({
        where: {
            id: req.params.id
        }, 
        include: [ User ]
    }).then((task) => {
        if(task != null) {
            res.json({status:200, data: task})
        } else {
            res.json({status:404, data: "La tâche n'existe pas !"})
        }
    })
})

// Get tasks from a specific User
router.get('/tasks/user/:id(\\d+)', (req, res) => {
    Task.findAll({
        where: {
            UserId: req.params.id
        },
        attributes: ['id', 'title', 'start', 'end', 'color']
    }).then((task) => {
        if(task != null) {
            res.json({status:200, data: task})
        } else {
            res.json({status:404, data: "La tâche n'existe pas !"})
        }
    })
})

// Create a new Task
router.post('/tasks', (req, res) => {
    Task.create({
        title: req.body.title,
        finished: false,
        start: req.body.start,
        end: req.body.end,
        UserId: req.body.userId,
        color: req.body.color
    }).then((task) => {
        if (task != null) {
            res.json({status:201, data:task}) 
        }
        else {
            res.json({status:404, data:"Un des champs rentré est incorrect"})
        }
    })
})

module.exports = router