import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setSelected} from '../store/navStyle'
import sr from '../scrollReveal'

const Navbar = props => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const config = {
      origin: 'top',
      duration: 2000,
      delay: 200,
      reset: true,
      distance: '50px',
      scale: 1,
      easing: 'ease'
    }

    sr.reveal('.navBarHome', config)
  }, [])

  return (
    <div className={props.style}>
      <nav>
        <div id="title">
          <Link
            id="titleLink"
            className="navLinkStyle"
            to="/"
            onClick={() => props.setSelected('home')}
          >
            <div id="name">JESSE SWEDLUND</div>
            <div id="separator"> | </div>
            <div id="jobTitle">SOFTWARE ENGINEER</div>
          </Link>
        </div>
        <div id="navLinks">
          <div className="navLink">
            <Link
              to="/"
              className="navLinkStyle"
              onClick={() => props.setSelected('home')}
            >
              HOME
            </Link>
            {props.selected === 'home' ? (
              <hr className="selectedNavHome" />
            ) : (
              <div />
            )}
          </div>
          <div className="navLink">
            <Link
              to="/projects"
              className="navLinkStyle"
              onClick={() => props.setSelected('projects')}
            >
              PROJECTS
            </Link>
            {props.selected === 'projects' ? (
              <hr className="selectedNavProjects" />
            ) : (
              <div />
            )}
          </div>
          <div className="navLink">
            <Link
              to="/contact"
              className="navLinkStyle"
              onClick={() => props.setSelected('contact')}
            >
              CONTACT
            </Link>
            {props.selected === 'contact' ? (
              <hr className="selectedNavContact" />
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>
      {props.style === 'navBarHome' ? (
        <a href="#about">
          <img src="/images/scroll.png" id="scrollArrowNav" />
        </a>
      ) : (
        <div />
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    style: state.navStyle.style,
    selected: state.navStyle.selected
  }
}

const mapDispatchToProps = dispatch => ({
  setSelected: selected => dispatch(setSelected(selected))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

//Selected Tab should be dfferent - underlined or highlighted in some way
