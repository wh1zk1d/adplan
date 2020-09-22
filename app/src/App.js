import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/ui/Layout'

import Clients from './components/AllClients'
import AddClient from './components/AddClient'
import EditClient from './components/EditClient'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Clients />
        </Route>

        <Route exact path='/add'>
          <AddClient />
        </Route>

        <Route exact path='/edit/:id' component={EditClient} />
      </Switch>
    </Layout>
  )
}

export default App
