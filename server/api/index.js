// Entry point for all API routes

const router = require('express').Router()

// Import subroutes
const clients = require('./clients')

// Default route
router.get('/', (req, res) => {
  res.send('hello world!')
})

router.use('/clients', clients)

module.exports = router
