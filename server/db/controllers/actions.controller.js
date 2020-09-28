const { nanoid } = require('nanoid')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/db.json')
const db = low(adapter)

// Initialize DB with defaults
db.defaults({ clients: [] }).write()

const handleError = (err) => {
  return res.status(500).json({ success: false, msg: err.message || 'An error occured' })
}

exports.addClient = async (req, res) => {
  const data = req.body
  data.id = nanoid()
  data.active = true

  await db.get('clients').push(data).write()

  res.status(200).json({ success: true, msg: 'added client' })
}

exports.getAll = async (req, res) => {
  try {
    const clients = await db.get('clients').value()

    res.status(200).json({ clients: clients })
  } catch (err) {
    handleError(err)
  }
}

exports.getOne = async (req, res) => {
  const id = req.params.id

  const client = await db.get('clients').find({ id: id }).value()

  if (client) {
    res.status(200).json({ client: client })
  } else {
    res.status(404).json({ success: false, msg: 'No client with this ID' })
  }
}

exports.update = async (req, res) => {
  const id = req.params.id
  const data = req.body

  try {
    await db.get('clients').find({ id: id }).assign(data).write()
    res.status(200).json({ success: true, msg: 'updated client' })
  } catch {
    res.status(500).json({ success: false, msg: 'An error occured' })
  }
}

exports.remove = async (req, res) => {
  const id = req.params.id

  try {
    await db.get('clients').remove({ id: id }).write()
    res.status(200).json({ success: true, msg: 'deleted client' })
  } catch {
    res.status(500).json({ success: false, msg: 'An error occured' })
  }
}
