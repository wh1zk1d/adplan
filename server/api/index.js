// Entry point for all API routes

const router = require('express').Router()
const auth = require('../utils/auth')
const makeWeeklyReport = require('../utils/getWeeklyClips')

// Import subroutes
const clients = require('./clients')

// Default route
router.get('/', (req, res) => {
  res.send('hello world!')
})

// Client stuff
router.use('/clients', clients)

// Trigger report generation
router.get('/report', auth, async (req, res) => {
  try {
    await makeWeeklyReport()
    res.status(200).json({ success: true, msg: 'Generated report' })
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message })
  }
})

module.exports = router
