// Entry point for all API routes

const router = require('express').Router()

// Import subroutes
const add = require('./addClient')
const clients = require('./getClient')

// Default route
router.get('/', (req, res) => {
  res.send('hello world!')
})

router.use('/add', add)
router.use('/clients', clients)

module.exports = router
