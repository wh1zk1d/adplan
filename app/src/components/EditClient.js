import React, { useState } from 'react'
import { useFormik } from 'formik'
import API from '../utils/api'

import Card from './ui/Card'
import { Error, Success } from './ui/Notifications'

const EditClient = (props) => {
  const id = props.match.params.id
  const [client] = useState(props.location.state.client)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Initialize Formik with values
  const formik = useFormik({
    initialValues: {
      active: client.active,
      name: client.name,
      coverage: client.coverage,
      cycle: client.cycle,
      spotLength: client.spotLength,
      showInFoyer: client.showInFoyer,
      startDate: client.startDate,
      endDate: client.endDate,
      costs: client.costs,
      contract: client.contract,
    },
    onSubmit: async (values) => {
      setSubmitting(true)
      try {
        await API.put(`/clients/${id}`, JSON.stringify(values))
        setError(false)
        setSubmitted(true)
      } catch {
        setError(true)
        setSubmitted(false)
      }
      setSubmitting(false)
    },
  })

  return (
    <Card>
      <h2 className='page-title'>Kunde bearbeiten</h2>

      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginTop: '32px' }}>
          <label htmlFor='active'>
            <input
              type='checkbox'
              id='active'
              name='active'
              onChange={formik.handleChange}
              value={formik.values.active}
              checked={formik.values.active}
            />{' '}
            Aktiv
          </label>
        </div>

        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor='coverage'>Abdeckung</label>
        <select
          id='coverage'
          name='coverage'
          onChange={formik.handleChange}
          value={formik.values.coverage}>
          <option value='25'>25%</option>
          <option value='50'>50%</option>
          <option value='75'>75%</option>
          <option value='100'>100%</option>
        </select>

        <label htmlFor='cycle'>Rhythmus</label>
        <select id='cycle' name='cycle' onChange={formik.handleChange} value={formik.values.cycle}>
          <option value='1'>A-Woche (gerade KW)</option>
          <option value='2'>B-Woche (ungerade KW)</option>
          <option value='3'>Voll</option>
        </select>

        <label htmlFor='spotLength'>Spotlänge (in Sekunden)</label>
        <input
          id='spotLength'
          name='spotLength'
          type='text'
          placeholder='42'
          onChange={formik.handleChange}
          value={formik.values.spotLength}
        />

        <div style={{ marginTop: '32px' }}>
          <label htmlFor='showInFoyer'>
            <input
              type='checkbox'
              id='showInFoyer'
              name='showInFoyer'
              onChange={formik.handleChange}
              value={formik.values.showInFoyer}
              checked={formik.values.showInFoyer}
            />{' '}
            Im Foyer zeigen
          </label>
        </div>

        <label htmlFor='startDate'>Startdatum</label>
        <input
          id='startDate'
          name='startDate'
          type='date'
          onChange={formik.handleChange}
          value={formik.values.startDate}
        />

        <label htmlFor='endDate'>Enddatum</label>
        <input
          id='endDate'
          name='endDate'
          type='date'
          onChange={formik.handleChange}
          value={formik.values.endDate}
        />

        <label htmlFor='costs'>Kosten (€)</label>
        <input
          id='costs'
          name='costs'
          type='text'
          placeholder='42'
          onChange={formik.handleChange}
          value={formik.values.costs}
        />

        <label htmlFor='contract'>Link zum Vertrag</label>
        <input
          id='contract'
          name='contract'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.contract}
        />

        <button type='submit' disabled={submitting}>
          {submitting ? 'Lade...' : 'Speichern'}
        </button>

        {error && <Error>Ein Fehler ist aufgetreten</Error>}
        {submitted && <Success>Kunde wurde aktualisiert</Success>}
      </form>
    </Card>
  )
}

export default EditClient
