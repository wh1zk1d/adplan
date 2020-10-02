// SETUP
require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 3001

// ROUTES
// Enable CORS
app.use(cors())

// Enable JSON and URL encoded body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require('./api')
app.use('/v1/', routes)

// Get weekly clips
const getWeeklyClips = require('./utils/getWeeklyClips')
getWeeklyClips()

// START SERVER
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
