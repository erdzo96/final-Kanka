import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Domov from './Domov'
import Produkty from './Produkty'
import Hodnotenie from './Hodnotenie'
import Kontakt from './Kontakt'

const Main = _ => (
  <main>
    <Switch>
      <Route exact path='/' component={Domov}/>
      <Route path='/Produkty' component={Produkty}/>
      <Route path='/Hodnotenie' component={Hodnotenie}/>
      <Route path='/Kontakt' component={Kontakt}/>
    </Switch>
  </main>
)

export default Main;
