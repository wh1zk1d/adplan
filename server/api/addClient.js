// Endpoint to add a client
const router = require('express').Router()
const { addClient } = require('../db/controllers/actions.controller')

router.get('/', addClient)

module.exports = router
