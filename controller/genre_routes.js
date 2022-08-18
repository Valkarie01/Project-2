const express = require('express')
const router = express.Router()
// const Artist = require('../models/artist')
const Genre = require('../models/genre')

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

module.exports = router