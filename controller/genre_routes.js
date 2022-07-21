const express = require('express')
const router = express.Router()
// const Artist = require('../models/artist')
const Genre = require('../models/genre')

// INDEX 
router.get('/', (req, res) => {
    Genre.find({})
        .then(genre => {
            res.render('artists/index', genre)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router