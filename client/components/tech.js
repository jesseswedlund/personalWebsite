import React, {useState} from 'react'
// import {SelectedTech} from './index'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Tech = () => {
  const [logo, setLogo] = useState('react')
  const handleClick = evt => {
    setLogo(evt.target.name)
  }

  return (
    <div className="sectionBox" id="tech">
      <div className="sectionName">Technical Skills</div>
      <hr className="underline" />
      <div className="techBox">
        <div id="techSkills">
          <div className="skillsList">
            <h3>Proficient: </h3>
            <div className="techList">
              <button
                type="button"
                className="skillButton"
                name="javascript"
                onMouseOver={handleClick}
                onClick={handleClick}
              >
                JavaScript
              </button>
              <button
                type="button"
                className="skillButton"
                name="node"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Node.js
              </button>
              <button
                type="button"
                className="skillButton"
                name="react"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                React
              </button>
              <button
                type="button"
                className="skillButton"
                name="redux"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Redux
              </button>
              <button
                type="button"
                className="skillButton"
                name="express"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Express
              </button>
              <button
                type="button"
                className="skillButton"
                name="sequelize"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Sequelize
              </button>
              <button
                type="button"
                className="skillButton"
                name="restful"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                RESTFul APIs
              </button>
              <button
                type="button"
                className="skillButton"
                name="postgresql"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                PostgreSQL
              </button>
              <button
                type="button"
                className="skillButton"
                name="phaser"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Phaser.js
              </button>
              <button
                type="button"
                className="skillButton"
                name="socketIO"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Socket.IO
              </button>
              <button
                type="button"
                className="skillButton"
                name="css"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                CSS
              </button>
              <button
                type="button"
                className="skillButton"
                name="html"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                HTML5{' '}
              </button>
              <button
                type="button"
                className="skillButton"
                name="git"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Git
              </button>
              <button
                type="button"
                className="skillButton"
                name="github"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Github
              </button>
            </div>
          </div>
          <div className="skillsList">
            <h3>Knowledgeable:</h3>
            <div className="techList">
              <button
                type="button"
                className="skillButton"
                name="pwa"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                PWA
              </button>
              <button
                type="button"
                className="skillButton"
                name="heroku"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Heroku
              </button>
              <button
                type="button"
                className="skillButton"
                name="webpack"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Webpack
              </button>
              <button
                type="button"
                className="skillButton"
                name="session"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Express-Session
              </button>
              <button
                type="button"
                className="skillButton"
                name="postico"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Postico
              </button>
              <button
                type="button"
                className="skillButton"
                name="sql"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                SQL
              </button>
            </div>
          </div>
          <div className="skillsList">
            <h3>Some Familiarity: </h3>
            <div className="techList">
              <button
                type="button"
                className="skillButton"
                name="materialUI"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Material UI
              </button>
              <button
                type="button"
                className="skillButton"
                name="passport"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Passport
              </button>
              <button
                type="button"
                className="skillButton"
                name="oAuth"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                OAuth
              </button>
              <button
                type="button"
                className="skillButton"
                name="travis"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Travis CI
              </button>
              <button
                type="button"
                className="skillButton"
                name="toastify"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Toastify
              </button>
              <button
                type="button"
                className="skillButton"
                name="nodemailer"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Nodemailer
              </button>
              <button
                type="button"
                className="skillButton"
                name="mocha"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Mocha
              </button>
              <button
                type="button"
                className="skillButton"
                name="chai"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Chai
              </button>
              <button
                type="button"
                className="skillButton"
                name="testem"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Testem
              </button>
            </div>
          </div>
        </div>
        <div id="techGraphic">
          <div id="techGraphicBox">
            <img src={`/images/techLogos/${logo}.png`} id="techGraphicLogo" />
          </div>
        </div>
      </div>
      <div className="spacerDiv" />
      <a href="#projects">
        <img src="/images/scroll.png" id="scrollArrow" />
      </a>
    </div>
  )
}

export default Tech
