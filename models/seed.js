const mongoose = require('./connection')
const Artist = require('./artist')
const Genre = require('./Genre')

db.on('open', () => {
    const startArtists = [
        { name: 'Nirvana', albums: 18, genre: ['Alternative Rock'], fave: false }, 
        { name: 'Sublime', albums: 9, genre: ['Reggae rock', 'ska punk'], fave: false  },
        { name: 'The Beatles', albums: 45, genre: ['Rock'], fave: false }
    ]

    const startGenres = [
        { genre: 'Alterative Rock' },
        { genre: 'Reggae Rock' },
        { genre: 'Ska Punk' },
        { genre: 'Rock' },
        { genre: 'Pop Music' },
        { genre: 'Heavy Metal' },
        { genre: 'Hip Hop' },
        { genre: 'Classical' },
        { genre: 'Folk' },
        { genre: 'Rhythm and Blues' },
        { genre: 'Electronic' },
        { genre: 'Country' },
        { genre: 'Latin' },
        { genre: 'New-Age' },
        { genre: 'Reggae' },
        { genre: 'Funk' },
        { genre: 'Punk Rock' },
    ]

    Artist.remove({})
    .then()
    .then()
    .catch(err => {
        console.log('error:', err)
        db.close()
    })

    Genre.remove({})
    .then()
    .then()
    .catch(err => {
        console.log('error:', err)
        db.close()
    })
})