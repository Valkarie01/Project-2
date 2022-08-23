const express = require('express')
const router = express.Router()
// const Artist = require('../models/artist')
const Genre = require('../models/genre')

// DELETE - Delete
router.delete('/:id', (req, res) => {
    const genreId = req.params.id

    Genre.findByIdAndRemove(genreId)
        .then(genre => {
            res.redirect('/')
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/:id/edit', (req, res) => {
    const genreId = req.params.id

    Genre.findById(genreId)
        .then(genre => {
            res.render('genres/edit', { genre })
        })
        .catch(err => {
            res.json(err)
        })
})

// PUT - Update
router.put('/:id', (req, res) => {
    const genreId = req.params.id

    Genre.findByIdAndUpdate(genreId, req.body, { new: true })
        .then(genre => {
            res.redirect(`/${ genre._id }`)
        })
        .catch(err => {
            res.json(err)
        })
})

// INDEX 
router.get('/', (req, res) => {
    Genre.find({})
        .then(genres => {
            console.log(genres)
            res.render('genres/index', {genres})
        })
        .catch(err => {
            res.json(err)
        })
})

// NEW 
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('genres/new', {username, loggedIn})
})

// CREATE
router.post('/', (req, res) => {
    req.body.owner = req.session.userId

    Genre.create(req.body)
        .then(genre => {
            console.log(genre)
            res.redirect('/')
        })
        .catch(err => {
            res.json(err)
        })
})

// SHOW 

router.get('/:id', (req, res) => {
    const genreId = req.params.id

    Genre.findById(genreId)

    .populate('comments.author')
    
        .then(genre => {
            res.render('genres/show', { genre })
        })
        .catch(err => {
            res.json(err)
        })
})


module.exports = router