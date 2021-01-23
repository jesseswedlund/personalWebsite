import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import ScrollToTop from './scrollToTop'

// establishes socket connection
import './socket'

library.add(fab)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
