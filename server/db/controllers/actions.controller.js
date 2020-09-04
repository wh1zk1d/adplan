const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/db.json')
const db = low(adapter)

const handleError = (err) => {
  return res.status(500).json({ success: false, msg: err.message || 'An error occured' })
}

exports.addClient = async (req, res) => {
  await db.get('clients').push({ id: 1, name: 'studio czyk' }).write()

  res.status(200).json({ success: true, msg: 'added new client' })
}

exports.getAllClients = async (req, res) => {
  try {
    const clients = await db.get('clients').value()

    res.status(200).json({ clients: clients })
  } catch (err) {
    handleError(err)
  }
}

exports.getClient = async (req, res) => {
  const id = req.params.id

  const client = await db
    .get('clients')
    .find({ id: parseInt(id) })
    .value()

  if (client) {
    res.status(200).json({ client: client })
  } else {
    res.status(404).json({ success: false, msg: 'No client with this ID' })
  }
}
