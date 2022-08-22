const express = require('express')
const router = express.Router()
const Artist = require('../models/artist')

// DELETE - Delete
router.delete('/:id', (req, res) => {
    const genreId = req.params.id

    Fruit.findByIdAndRemove(genreId)
        .then(fruit => {
            res.redirect('/')
        })
        .catch(err => {
            res.json(err)
        })
    })

// INDEX
router.get('/', (req, res) => {
    Artist.find({})
        .then(artist => {
            console.log(artists)
            res.render('artists/index', {artist})
        })
        .catch(err => {
            res.json(err)
        })
})

// New 
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('artists/new', {username, loggedIn})
})
// Create
router.post('/artist', (req, res) => {
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