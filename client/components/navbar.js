import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setSelected} from '../store/navStyle'

const Navbar = props => {
  const [menu, setMenu] = useState(false)

  return (
    <div id={props.style}>
      <nav>
        <div id="title">
          <Link id="titleLink" to="/" onClick={() => props.setSelected('home')}>
            <div id="name">JESSE SWEDLUND</div>
            <div id="separator"> | </div>
            <div id="jobTitle">SOFTWARE ENGINEER</div>
          </Link>
        </div>
        <div id="navLinks">
          <div className="navLink">
            <Link to="/" onClick={() => props.setSelected('home')}>
              HOME
            </Link>
            {props.selected === 'home' ? (
              <hr className="selectedNavHome" />
            ) : (
              <div />
            )}
          </div>
          <div className="navLink">
            <Link to="/projects" onClick={() => props.setSelected('projects')}>
              PROJECTS
            </Link>
            {props.selected === 'projects' ? (
              <hr className="selectedNavProjects" />
            ) : (
              <div />
            )}
          </div>
          <div className="navLink">
            <Link to="/contact" onClick={() => props.setSelected('contact')}>
              CONTACT
            </Link>
            {props.selected === 'contact' ? (
              <hr className="selectedNavContact" />
            ) : (
              <div />
            )}
          </div>
        </div>
        <div>
          <img
            src="/images/menu.png"
            id="menu"
            onClick={() => setMenu(!menu)}
          />
        </div>
        {menu ? (
          <div id="slide">
            <div className="menuLinks">
              <Link to="/" className="menuLink" onClick={() => setMenu(!menu)}>
                HOME
              </Link>
              <Link
                to="/projects"
                className="menuLink"
                onClick={() => setMenu(!menu)}
              >
                PROJECTS
              </Link>
              <Link
                to="/contact"
                className="menuLink"
                onClick={() => setMenu(!menu)}
              >
                CONTACT
              </Link>
              <div className="menuLink" onClick={() => setMenu(!menu)}>
                EXIT MENU
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
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
