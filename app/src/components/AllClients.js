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

  const handleDelete = async (id, name) => {
    if (window.confirm(`Soll Kunde ${name} wirklich gelöscht werden?`)) {
      try {
        await API.delete(`/clients/${id}`)
      } catch (err) {
        alert(err.message)
      }
    }
  }

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
              <th>Aktionen</th>
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
                <td>
                  {client.endDate
                    ? new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(
                        new Date(client.endDate)
                      )
                    : 'Unbegrenzt'}
                </td>
                <td>{client.costs}€</td>
                <td>
                  {client.contract ? (
                    <a
                      href={client.contract}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Vertrag anzeigen'
                      className='underdotted'>
                      Anzeigen
                    </a>
                  ) : (
                    '–'
                  )}
                </td>
                <td>
                  <Link
                    to={{ pathname: `/edit/${client.id}`, state: { client: client } }}
                    title='Bearbeiten'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-edit'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#1c64f2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                      <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                      <line x1='16' y1='5' x2='19' y2='8' />
                    </svg>
                  </Link>{' '}
                  <button
                    className='delete-icon'
                    onClick={() => handleDelete(client.id, client.name)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-trash'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#F44336'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <line x1='4' y1='7' x2='20' y2='7' />
                      <line x1='10' y1='11' x2='10' y2='17' />
                      <line x1='14' y1='11' x2='14' y2='17' />
                      <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                      <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
                    </svg>
                  </button>
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
