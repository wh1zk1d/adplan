import React, { useState, useEffect } from 'react'

const AllClients = () => {
  const [loading, setLoading] = useState(true)
  const [clients, setClients] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await fetch('http://localhost:1234/v1/clients')
        const { clients } = await res.json()
        setClients(clients)
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    }

    getClients()
  }, [])

  if (loading) {
    return 'Lade Daten...'
  }

  return (
    <div>
      <h1 className='page-title'>Dashboard</h1>

      <table>
        <thead>
          <tr>
            <th>Aktiv</th>
            <th>Kunde</th>
            <th>Abdeckung</th>
            <th>Rhythmus</th>
            <th>Spotlänge</th>
            <th>Foyer</th>
            <th>Startdatum</th>
            <th>Enddatum</th>
            <th>Kosten</th>
            <th>Vertrag</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>
                {client.active ? (
                  <span className='active-yes'>Ja</span>
                ) : (
                  <span className='active-no'>Nein</span>
                )}
              </td>
              <td>{client.name}</td>
              <td>{client.coverage}%</td>
              <td>{client.cycle}</td>
              <td>{client.spotLength}</td>
              <td>{client.showInFoyer ? 'Ja' : 'Nein'}</td>
              <td>{client.startDate}</td>
              <td>{client.endDate ? client.endDate : 'Unbegrenzt'}</td>
              <td>{client.costs}€</td>
              <td>Anzeigen</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllClients
