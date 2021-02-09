import React from 'react'
import {Navbar, Footer, Menu} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Routes />
      </div>
      <Footer />
      <Menu />
    </div>
  )
}

export default App
