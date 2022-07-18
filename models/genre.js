const mongoose = require('./connection')

const { Schema, model } = mongoose

const genreSchema = new Schema({
    genre: [ String ],
})

const Genre = model('Genre', genreSchema)

module.exports = Genre