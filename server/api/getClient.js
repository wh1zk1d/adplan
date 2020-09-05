// Endpoint to get all clients / a specific client
const router = require('express').Router()
const { getAll, getOne, update, remove } = require('../db/controllers/actions.controller')

router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
