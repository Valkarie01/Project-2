// Dependencies
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// Router
const router = express.Router()


// Signup Routes
router.get('/signup', (req, res) => {
    res.render('users/signup')
})
router.post('/signup', async (req, res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(15)
    )

    User.create(req.body)
        .then(user => {
            res.redirect('/users/login')
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    User.findOne({ username })
        .then(async (user) => {
            if (user) {
                const result = await bcrypt.compare(password, user.password)

                if (result) {
                    req.session.username = username
                    req.session.loggedIn = true
                    req.session.userId = user._id
                    res.redirect('/')
                } else {
                    res.json({ error: 'username or password incorrect' })
                }
            } else {
                res.json({ error: 'user does not exist' })
            }
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

// logout route
router.get('/logout', (req, res) => {
    req.session.destroy(ret => {
        res.redirect('/')
    })
})

module.exports = router