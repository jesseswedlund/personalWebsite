import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <div id="footerJesse">
        <h3 className="footerTitle">JESSE SWEDLUND</h3>
        <Link to="/contact" className="footerLink" id="footerDescription">
          I'm a software engineer with a passion for creativity. Let's build
          something together!
        </Link>
      </div>
      <div className="footerNavBox">
        <div className="footerNav">
          <h3 className="footerTitle">NAVIGATION</h3>
          <div className="footerLinkBox">
            <Link to="/" className="footerLink">
              HOME
            </Link>
            <Link to="/projects" className="footerLink">
              PROJECTS
            </Link>
            <Link to="/contact" className="footerLink">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <div id="footerFollowBox">
        <h3 className="footerTitle">FOLLOW ME</h3>
        <div id="socialLinksFooter">
          <a
            href="https://www.linkedin.com/in/jesseswedlund/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconFooter"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a
            href="https://github.com/jesseswedlund"
            target="_blank"
            rel="noopener noreferrer"
            className="iconFooter"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a
            href="https://jesseswedlund.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconFooter"
          >
            <FontAwesomeIcon icon={['fab', 'medium']} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
