const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Objective = require('../models/Objective')

// Rest API User Routes

// GET ALL USERS
router.get('/objectives', (req, res) => {
    Objective.findAll({
        include: [ User ]
    }).then((users) => {
        
        res.json({status: 200, data: users})
    })
})

// Get a specific objective
router.get('/objectives/:id(\\d+)', (req, res) => {
    Objective.findOne({
        where: {
            id: req.params.id
        }, 
        include: [ User ]
    }).then((objective) => {
        if(objective != null) {
            res.json({status:200, data: objective})
        } else {
            res.json({status:404, data: "L'objectif n'existe pas !"})
        }
    })
})

// Create a new Objective
router.post('/objectives', (req, res) => {
    User.create({
        name: req.body.name,
        finished: false
    }).then((user) => {
        res.json({status:201, data:user})
    }).catch(res.json({status:404, data:"Un des champs rentré est incorrect"}))
})

module.exports = router