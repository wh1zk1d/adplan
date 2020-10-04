// ? Get all clips from the DB that are due in the current week

const sendMail = require('./sendMail')

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
  let weekNumber = getWeekNumber()

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

  // Concat weekly and VIP clients, and filter out unnecessary values
  let clients = [...weekClients, ...vipClients].map((client) => {
    return { name: client.name, duration: client.spotLength, showInFoyer: client.showInFoyer }
  })

  // Send the mail
  try {
    await sendMail(clients, weekNumber, weekCycle)
  } catch (err) {
    console.log(err)
    throw new Error(err.message)
  }
}

module.exports = getClips
