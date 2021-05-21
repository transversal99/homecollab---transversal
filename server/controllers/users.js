const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const upload = require('express-fileupload')

const User = require('../models/User')
const Task = require('../models/Task');

// Rest API User Routes
router.use(upload())
// GET ALL USERS
router.get('/users', (req, res) => {
    User.findAll({
        include: [Task]
    }).then((users) => {
        res.json({status: 200, data: users})
    })
})

// Get a specific user with id
router.get('/users/id/:id(\\d+)', (req, res) => {
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

// Get a specific id with email
router.get('/users/email/:email', (req, res) => {
    User.findOne({
        where: {
            email: req.params.email
        }
    }).then((user) => {
        if(user != null) {
            res.json({status:200, data: user.id})
        } else {
            res.json({status:404, data: "Le user n'existe pas !!!"})
        }
    })
})

// Create a new User
router.post('/users', (req, res) => {
    console.log(req)
    
    // Generate Salt
    const salt = bcrypt.genSaltSync(10);

    // Hash Password
    const hash = bcrypt.hashSync(req.body.password, salt);
    if (Object.keys(req.body).length != undefined) {
        User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            profile_img: req.files.profile_img.data,
            cover_img: req.files.cover_img.data,
            password: hash
        }).then((user) => {
            res.json({status:201, data:user})
        }).catch((error) => {
            res.json({status: 400, data: error})
        }) 
    }
    else {
        res.json({status:404, data: "Ca va marcher"})
    }
})

// Login a User
router.post('/users/login', (req, res) => {
    // Connect the user
    console.log(Object.keys(req.body).length)
    if (Object.keys(req.body).length != undefined) {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {
            console.log(user.password)
            if (user != null) {
                const isValidPass = bcrypt.compareSync(req.body.password, user.password);
                if (isValidPass) {
                    res.json({status:200, data: user, message:"Vous êtes désormais connecté"})
                }
                else {
                    res.json({status:401, data: "Le mot de Passe est incorrect"})
                }
            }
            else {
                res.json({status:404, data: "Le user a pas été trouvé"})
            }
        })
    }
    else {
        res.json({status:404, data: "Aucun paramètres envoyés"})
    }
})

router.put('/users/id/:id(\\d+)', (req, res) => {
    let userEmail = req.body.email || undefined
    let userFirstname = req.body.firstname || undefined
    let userLastname = req.body.lastname || undefined
    let userPhone = req.body.phone || undefined
    let userPassword = req.body.password
    let newPassword = req.body.newPassword || undefined
    let confirmPassword = req.body.confirmPassword || undefined
    // Solution 1
    console.log(userEmail + " " + userFirstname + " " + userLastname)
    console.log(req.body)
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        if(user != null) {
            if (userEmail != undefined) {
                user.update({
                    email: userEmail
                }).then((user) => {
                    res.json({status:200, data: user})
                })
            }
            if(userFirstname != undefined){
                user.update({
                    firstname: userFirstname
                }).then((user) => {
                    res.json({status:200, data: user})
                })
            }
            if (userLastname != undefined) {
                user.update({
                    lastname: userLastname
                }).then((user) => {
                    res.json({status:200, data: user})
                })
            }
            if (userPhone != undefined) {
                user.update({
                    phone: userPhone
                }).then((user) => {
                    res.json({status:200, data: user})
                })
            }
            if (newPassword != undefined && newPassword === confirmPassword) {
                const isValidPass = bcrypt.compareSync(userPassword, user.password);
                if (isValidPass) {

                    // Generate Salt
                    const salt = bcrypt.genSaltSync(10);

                    // Hash Password
                    const hash = bcrypt.hashSync(newPassword, salt);
                    user.update({
                        password: hash
                    }).then((user) => {
                        res.json({status:200, data: user})
                    })
                }
                else {
                    res.json({status:401, data: "Le mot de Passe est incorrect"})
                }
            }

        } else {
            res.json({status:404, data: "Le user n'existe pas !"})
        }
    }
)})

module.exports = router