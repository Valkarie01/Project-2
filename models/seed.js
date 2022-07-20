const mongoose = require('./connection')
const Artist = require('./artist')
const Genre = require('./Genre')

db.on('open', () => {
    const startArtists = [
        { name: 'Nirvana', albums: 18, genre: ['Alternative Rock'], fave: undefined }, 
        { name: 'Sublime', albums: 9, genre: ['Reggae rock', 'ska punk'], fave: undefined },
        { name: 'The Beatles', albums: 45, genre: ['Rock'], fave: undefined },
        { name: 'Kanye West', albums: 28, genre: ['Hip Hop', 'Rap'], fave: undefined },
        { name: 'Kid Cudi', albums: 10, genre: ['Hip Hop', 'Rap'], fave: undefined },
        { name: 'Gorillaz', albums: 22, genre: ['Alterative Rock', 'Electronic'], fave: undefined },
        { name: 'Doja Cat', albums: 5, genre: ['Hip Hop', 'R&B'], fave: undefined },
        { name: 'Metalica', albums: 21, genre: ['Metal'], fave: undefined },
        { name: 'Ariana Grande', albums: 13, genre: ['Pop Music'], fave: undefined },
        { name: 'Keyshia Cole', albums: 8, genre: ['R&B'], fave: undefined },
        { name: 'Bad Bunny', albums: 9, genre: ['Latin'], fave: undefined },
        { name: 'Dr. Dre', albums: 6, genre: ['Rap'], fave: undefined },
        { name: 'Joji', albums: 5, genre: ['R&B', 'Soul'], fave: undefined },
        { name: 'Juice WRLD', albums: 7, genre: ['Hip Hop', 'Rap'], fave: undefined },
        { name: 'Flo Rida', albums: 15, genre: ['Hip Hop', 'Rap', 'Pop Music','Electronic'], fave: undefined }
    ]

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