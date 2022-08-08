const express = require('express')
const router = express.Router()
const Artist = require('../models/artist')

// New 
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('artists/new', {username, loggedIn})
})
// Create
router.post('/', (req, res) => {
    req.body.fave = req.body.fave === 'on' ? true : false
    req.body.owner = req.session.userId

    Artist.create(req.body)
        .then(artist => {
            console.log(artist)
            res.redirect('/')
        })
        .catch(err => {
            res.json(err)
        })
})

// Show
router.get('/:id', (req, res) => {
    Artist.find({})
        .then(artists => {
            res.render('artists/show', artists)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router