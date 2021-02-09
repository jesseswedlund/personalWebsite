import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <div>
        <img src="/images/menu.png" id="menu" onClick={() => setMenu(!menu)} />
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
    </div>
  )
}

export default Menu
