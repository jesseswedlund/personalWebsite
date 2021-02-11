import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Home, ProjectPage, Contact, NotFound} from './components'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/notFound" component={NotFound} />
      <Redirect to="/notFound" />
    </Switch>
  )
}

export default Routes
