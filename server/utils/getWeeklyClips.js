// ? Get all clips from the DB that are due in the current week

// Initialize DB connection
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/db.json')
const db = low(adapter)

// Date stuff
const { getWeekNumber, getWeekCycle } = require('./getWeekNumber')

// Get clips
const getClips = async () => {
  let weekClients
  let weekCycle = getWeekCycle()

  // TODO: Filter out all where the current date is not between start and end

  // Get all clients that should be shown each week
  let vipClients = await db.get('clients').filter({ cycle: '3', active: true }).value()

  // Get all clients for A week
  if (weekCycle === 'A') {
    weekClients = await db.get('clients').filter({ cycle: '1', active: true }).value()
  }

  // Get all clients for B week
  if (weekCycle === 'B') {
    weekClients = await db.get('clients').filter({ cycle: '2', active: true }).value()
  }

  // Concat weekly and VIP clients
  let clients = [...weekClients, ...vipClients]

  // Return a combined Array with both client groups
  console.log(`\n## Kunden für KW${getWeekNumber()} ##`)
  console.log(clients.map((client) => client.name))
}

module.exports = getClips
