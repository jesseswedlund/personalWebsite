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
      easing: 'ease',
    }

    sr.reveal('.aboutBox', config)
    sr.reveal('.ARROW', config)
  }, [])

  return (
    <div id="about" className="ABOUT">
      <div className="sectionName">Hi, I'm Jesse.</div>
      <div className="aboutBox">
        <div className="aboutPhotoBox">
          <img
            src="images/jesseYuki.jpg"
            id="aboutPhoto"
            alt="Jesse with his dog"
          />
        </div>
        <div className="aboutDescription">
          I'm a senior full-stack engineer with deep backend and systems
          expertise, currently at Carbon Direct where I own the carbon credit
          inventory management platform. I specialize in building AI-native
          tooling — leveraging the Anthropic API, Claude Code, and MCP to create
          systems that make engineering teams faster and more capable. I care
          about technical ownership, clear communication across engineering and
          the business, and writing software that lasts. With a background in
          outdoor education and documentary filmmaking, I bring strong people
          skills and a creative approach to every problem. When I'm not coding,
          I'm usually on a river, a mountain, or a bike.
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
        <img
          src="/images/scroll.png"
          className="scrollArrow"
          alt="down arrow"
        />
      </a>
    </div>
  )
}

export default About
