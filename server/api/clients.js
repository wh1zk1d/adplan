// Endpoint to get all clients / a specific client
const router = require('express').Router()
const {
  addClient,
  getAll,
  getOne,
  update,
  remove,
} = require('../db/controllers/actions.controller')

// Auth middleware
const auth = require('../utils/auth')

router.post('/', addClient)
router.get('/', auth, getAll)
router.get('/:id', getOne)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
