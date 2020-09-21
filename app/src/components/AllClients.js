import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import API from '../utils/api'

import Card from './ui/Card'

const AllClients = () => {
  const { isLoading, error, data } = useQuery('fetchClients', async () => {
    const {
      data: { clients },
    } = await API.get('/clients')
    return clients
  })

  return (
    <Card>
      <div className='flex-between'>
        <h1 className='page-title'>Kunden</h1>

        <Link to='/add' className='text-link'>
          Kunde hinzufügen +
        </Link>
      </div>

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
                <td>
                  {client.cycle === '1' && 'A-Woche'}
                  {client.cycle === '2' && 'B-Woche'}
                  {client.cycle === '3' && 'Voll'}
                </td>
                <td>{client.spotLength}sek</td>
                <td>{client.showInFoyer ? 'Ja' : 'Nein'}</td>
                <td>
                  {new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(
                    new Date(client.startDate)
                  )}
                </td>
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
    </Card>
  )
}

export default AllClients
