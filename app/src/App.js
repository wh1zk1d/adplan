import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/ui/Layout'

import Clients from './components/views/AllClients'
import AddClient from './components/views/AddClient'
import EditClient from './components/views/EditClient'

const App = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default App
