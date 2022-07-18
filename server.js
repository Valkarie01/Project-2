// === Dependencies ====
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const artistRoutes = require('./controller/artist_routes')
const userRoutes = require('./controller/user_routes')
const genreRoutes = require('./controller/genre_routes')
const app = require('liquid-express-views')(express())

// == Middleware ===

app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const session = require('express-session')
const MongoStore = require('connect-mongo')

app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)

// ====== Routes =======

app.use('/artist', artistRoutes)
app.use('/users', userRoutes)
app.use('/genre', genreRoutes)

// ======= PORT ========
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})