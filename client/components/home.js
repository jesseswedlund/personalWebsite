import React, {useEffect} from 'react'
import {About, Tech, Projects} from './index'
import {connect} from 'react-redux'
import {setStyle} from '../store/navStyle'

const Home = props => {
  useEffect(() => {
    props.setStyle('navBarHome')
  }, [])

  return (
    <div id="container">
      <About />
      <Tech />
      <Projects />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setStyle: style => dispatch(setStyle(style))
})

export default connect(null, mapDispatchToProps)(Home)
