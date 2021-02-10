import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import sr from '../scrollReveal'

const About = () => {
  useEffect(() => {
    const config = {
      origin: 'top',
      duration: 2000,
      delay: 200,
      reset: false,
      distance: '50px',
      scale: 1,
      easing: 'ease'
    }

    sr.reveal('.aboutBox', config)
    sr.reveal('.ARROW', config)
  }, [])

  return (
    <div id="about" className="ABOUT">
      <div className="sectionName">Hi, I'm Jesse.</div>
      <div className="aboutBox">
        <div className="aboutPhotoBox">
          <img src="images/jesseYuki.jpg" id="aboutPhoto" />
        </div>
        <div className="aboutDescription">
          My focus is on finding creative solutions and human-centered
          approaches to creating enriching and memorable experiences for users
          of technology. I enjoy creating intuitive user interfaces that
          interact seemlessly with server side operations. With a background in
          outdoor education and documentary filmmaking, I possess strong
          communication and leadership skills. An adventurer at heart, I am
          always scanning the horizon for my next inspiration.
          <div id="socialLinks">
            <a
              href="https://www.linkedin.com/in/jesseswedlund/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a
              href="https://github.com/jesseswedlund"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a
              href="https://jesseswedlund.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={['fab', 'medium']} />
            </a>
          </div>
        </div>
      </div>
      <div className="spacerDiv" />
      <a href="#tech" className="ARROW">
        <img src="/images/scroll.png" className="scrollArrow" />
      </a>
    </div>
  )
}

export default About
