const mongoose = require('./connection')

const { Schema, model } = mongoose

const artistSchema = new Schema({
    name: String,
    albums: Number,
    genre: [ String ],
    fave: {
        type: Boolean,
        ref: 'User'

    }
}, {
    timestamps: true
})

const Artist = model('Artist', artistSchema)

module.exports = Artist