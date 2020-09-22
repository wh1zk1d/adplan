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

router.post('/', auth, addClient)
router.get('/', auth, getAll)
router.get('/:id', auth, getOne)
router.put('/:id', auth, update)
router.delete('/:id', auth, remove)

module.exports = router
