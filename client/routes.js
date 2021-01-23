import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home, ProjectPage, Contact} from './components'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={ProjectPage} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}

export default Routes
