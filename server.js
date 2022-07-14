// === Dependencies ====
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const bandRoutes = require('./controller/band_routes')
const userRoutes = require('./controller/user_routes')
const genreRoutes = require('./controller/genre_routes')
const app = require('liquid-express-views')(express())

// == Middleware ===



// ====== Routes =======

app.use('/bands', bandRoutes)
app.use('/users', userRoutes)
app.use('/genres', genreRoutes)

// ======= PORT ========
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})