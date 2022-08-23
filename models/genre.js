const mongoose = require('./connection')
const commentSchema = require('./comment')

const { Schema, model } = mongoose

const genreSchema = new Schema({
    genre: [ String ],
    owner: {
        type: Schema.Types.ObjectId, // a single user ._id 
        ref: 'User', // const User = model('User', userSchema)
        // The string of User is how we referance a model
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

const Genre = model('Genre', genreSchema)

module.exports = Genre