import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Loading from './components/Loading'
import Clients from './components/views/AllClients'
import AddClient from './components/views/AddClient'
import EditClient from './components/views/EditClient'

import './App.css'

const App = () => {
  const { isLoading, error } = useAuth0()

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Switch>
      <Route exact path='/dashboard'>
        <Clients />
      </Route>
      <Route exact path='/add'>
        <AddClient />
      </Route>
      <Route exact path='/edit/:id' component={EditClient} />
      <Route path='*'>
        <Redirect to='/dashboard' />
      </Route>
    </Switch>
  )
}

export default App
