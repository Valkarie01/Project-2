const express = require('express')
const router = express.Router()
const Artist = require('../models/artist')

// Show
router.get('/:id', (req, res) => {
    Artist.find({})
        .then(artists => {
            res.render('show', { artists })
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router