// Endpoint to get all clients / a specific client
const router = require('express').Router()
const { getAllClients, getClient } = require('../db/controllers/actions.controller')

router.get('/', getAllClients)
router.get('/:id', getClient)

module.exports = router
