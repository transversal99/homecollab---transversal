const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

const User = require('../models/User')
const Objective = require('../models/Objective')

// Rest API User Routes

// GET ALL USERS
router.get('/users', (req, res) => {
    User.findAll({
        include: [ Objective ]
    }).then((users) => {
        
        res.json({status: 200, data: users})
    })
})

// Get a specific user
router.get('/users/:id(\\d+)', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        if(user != null) {
            res.json({status:200, data: user})
        } else {
            res.json({status:404, data: "Le user n'existe pas !!!"})
        }
    })
})

// Create a new User
router.post('/users', (req, res) => {

    // Generate Salt
    const salt = bcrypt.genSaltSync(10);

    // Hash Password
    const hash = bcrypt.hashSync(req.body.password, salt);

    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        password: hash
    }).then((user) => {
        res.json({status:201, data:user})
    })
})

// Login a User
router.post('/users/login', (req, res) => {
    // Connect the user
    if (req.body.length != undefined) {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {
            if (user != null) {
                const isValidPass = bcrypt.compareSync(req.body.password, user.password);
                if (isValidPass) {
                    res.json({status:200, data: user, message:"Vous êtes désormais connecté"})
                }
            }
            else {
                res.json({status:401, data: "Le mot de Passe est incorrect"})
            }
        })
    }
    else {
        res.json({status:404, data: "Aucun paramètres envoyés"})
    }
})

module.exports = router