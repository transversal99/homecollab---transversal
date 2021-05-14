const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Task = require('../models/Task')

// Rest API User Routes

// GET ALL USERS
router.get('/tasks', (req, res) => {
    Task.findAll({
        include: [ User ]
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

// Create a new Task
router.post('tasks', (req, res) => {
    Task.create({
        name: req.body.name,
        finished: false
    }).then((task) => {
        res.json({status:201, data:task})
    }).catch(res.json({status:404, data:"Un des champs rentré est incorrect"}))
})

module.exports = router