import React, { useState } from 'react'
import { useFormik } from 'formik'
import API from '../utils/api'

import Card from './ui/Card'

const AddClient = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      coverage: '25',
      cycle: '3',
      spotLength: '',
      showInFoyer: false,
      startDate: '',
      endDate: '',
      costs: '',
    },
    onSubmit: async (values) => {
      const res = await API.post('/clients', JSON.stringify(values))
      console.log(res)
    },
  })

  return (
    <Card>
      <h1 className='page-title'>Kunde hinzufügen</h1>

      <form onSubmit={formik.handleSubmit}>
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
            />{' '}
            Im Foyer zeigen
          </label>
        </div>

        <label htmlFor='startDate'>Startdatum</label>
        <input
          id='startDate'
          name='startDate'
          type='datetime-local'
          onChange={formik.handleChange}
          value={formik.values.startDate}
        />

        <label htmlFor='endDate'>Enddatum</label>
        <input
          id='endDate'
          name='endDate'
          type='datetime-local'
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

        <button type='submit'>Speichern</button>
      </form>
    </Card>
  )
}

export default AddClient
