const express = require('express')
const router = express.Router()
const Artist = require('../models/artist')

// INDEX 
router.get('/', (req, res) => {
    Artist.find({})
        .then(artist => {
            res.render('artists/index', artist)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router