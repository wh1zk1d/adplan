// ? Get all clips from the DB that are due in the current week

const sendMail = require('./sendMail')

// Initialize DB connection
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/db.json')
const db = low(adapter)

// Date stuff
const { getWeekNumber } = require('./getWeekNumber')

// Filter out all clients that haven't started yet/ended
const filterValidClients = (clients) => {
  const today = new Date().toISOString().slice(0, 10)

  return clients.filter((client) => {
    if (client.startDate <= today && !client.endDate) {
      return true
    } else if (client.startDate <= today && client.endDate > today) {
      return true
    } else {
      return false
    }
  })
}

// Get clients for a given week in month (1-4)
const filterByCoverage = (clients, coverage) => {
  return clients.filter(
    (client) => parseInt(client.coverage) <= coverage + 1 && parseInt(client.coverage) >= coverage
  )
}

// Get clips
const getClips = async () => {
  let weekClients
  const weekNumber = getWeekNumber()
  const weekCount = await db.get('week').value()

  // Get all clients that are active & started
  const allClients = await db.get('clients').filter({ active: true }).value()
  const validClients = filterValidClients(allClients)

  // TODO: Check for A/B week in week 2
  // TODO: Increase weekCount
  // Get all clients for the according week
  if (weekCount === '1') {
    weekClients = validClients
  }

  if (weekCount === '2') {
    weekClients = filterByCoverage(validClients, 2)
  }

  if (weekCount === '3') {
    weekClients = filterByCoverage(validClients, 3)
  }

  if (weekCount === '4') {
    weekClients = filterByCoverage(validClients, 4)
  }

  // Filter out unnecessary values
  let clients = weekClients.map((client) => {
    return { name: client.name, duration: client.spotLength, showInFoyer: client.showInFoyer }
  })

  // Send the mail
  try {
    await sendMail(clients, weekNumber)
  } catch (err) {
    console.log(err)
    throw new Error(err.message)
  }
}

module.exports = getClips
