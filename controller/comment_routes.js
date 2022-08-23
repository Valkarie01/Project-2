const express = require('express')
const router = express.Router()
const Genre = require('../models/genre')

// POST 
router.post('/:genreId', (req, res) => {
    const genreId = req.params.genreId
    req.body.author = req.body.userId

    Genre.findById(genreId)
    .then(genre => {
        genre.comments.push(req.body)
        return genre.save()
    })
    .then(genre => {
        res.redirect(`/${genre._id}`)
    })
    .catch(err => {
        res.json(err)
    })
})

// DELETE 
router.delete('/delete/:genreId/:commId', (req, res) => {
    const genreId = req.params.genreId
    const commId = req.params.commId

    Genre.findById(genreId)
    .then(genre => {
        const comment = genre.comments.id(commId)
        comment.remove()
        return genre.save()
    })
    .then(genre => {
        res.redirect(`/${genreId}`)
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router 