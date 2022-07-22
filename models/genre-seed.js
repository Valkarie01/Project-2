const mongoose = require('./connection')
const Genre = require('./genre')
const db = mongoose.connection

db.on('open', () => {
const startGenres = [
    { genre: 'Alterative Rock' },
    { genre: 'Reggae Rock' },
    { genre: 'Ska Punk' },
    { genre: 'Rock' },
    { genre: 'Pop Music' },
    { genre: 'Hip Hop' },
    { genre: 'Rhythm and Blues' },
    { genre: 'Electronic' },
    { genre: 'Latin' },
    { genre: 'Rap' },
    { genre: 'R&B' },
    { genre: 'Metal' },
    { genre: 'Soul' }
]

Genre.remove({})
    .then(deleted => {
        console.log('deleted ', deleted)
        Genre.create(startGenres)
            .then(data => {
                console.log('the new artists', data)
                db.close()
            })
            .catch(err => {
                console.log('error:', err)
            })
        })
    .catch(err => {
        console.log('error:', err)
        db.close()
    })
})