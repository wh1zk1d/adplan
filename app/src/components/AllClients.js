import React from 'react'
import { useQuery } from 'react-query'
import API from '../utils/api'

const AllClients = () => {
  const { isLoading, error, data } = useQuery('fetchClients', async () => {
    const {
      data: { clients },
    } = await API.get('/clients')
    return clients
  })

  return (
    <div>
      <h1 className='page-title'>Dashboard</h1>

      <button>Kunde hinzufügen</button>

      {error && 'Ein Fehler ist aufgetreten'}

      {isLoading ? (
        'Lade Kunden...'
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
            {data.map((client) => (
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
