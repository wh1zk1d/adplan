import React, { useState, useEffect } from 'react'
import API from '../utils/api'

const AllClients = () => {
  const [loading, setLoading] = useState(true)
  const [clients, setClients] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getClients = async () => {
      try {
        const {
          data: { clients },
        } = await API.get('/clients')
        setClients(clients)
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    }

    getClients()
  }, [])

  return (
    <div>
      <h1 className='page-title'>Dashboard</h1>

      <button>Kunde hinzufügen</button>

      {error && 'Ein Fehler ist aufgetreten'}

      {loading ? (
        'Lade Daten...'
      ) : (
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
                <td>{client.spotLength}sek</td>
                <td>{client.showInFoyer ? 'Ja' : 'Nein'}</td>
                <td>{client.startDate}</td>
                <td>{client.endDate ? client.endDate : 'Unbegrenzt'}</td>
                <td>{client.costs}€</td>
                <td>
                  <a
                    href={process.env.REACT_APP_API_URL + '/contracts/' + client.contract}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Vertrag anzeigen'
                    className='underdotted'>
                    Anzeigen
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AllClients
