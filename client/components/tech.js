import React, {useState, useEffect} from 'react'
import sr from '../scrollReveal'

const Tech = () => {
  const [logo, setLogo] = useState('react')
  const handleClick = (evt) => {
    setLogo(evt.target.name)
  }

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

    sr.reveal('.techBox', config)
    sr.reveal('.ARROW', config)
  }, [])

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
                name="typescript"
                onMouseOver={handleClick}
                onClick={handleClick}
              >
                TypeScript
              </button>
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
                name="nextjs"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Next.js
              </button>
              <button
                type="button"
                className="skillButton"
                name="nestjs"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                NestJS
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
                name="postgresql"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                PostgreSQL
              </button>
              <button
                type="button"
                className="skillButton"
                name="restful"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                RESTful APIs
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
                name="githubactions"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                GitHub Actions
              </button>
              <button
                type="button"
                className="skillButton"
                name="terraform"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Terraform
              </button>
              <button
                type="button"
                className="skillButton"
                name="anthropic"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Anthropic API
              </button>
              <button
                type="button"
                className="skillButton"
                name="claudecode"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Claude Code
              </button>
              <button
                type="button"
                className="skillButton"
                name="cursor"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Cursor
              </button>
              <button
                type="button"
                className="skillButton"
                name="promptengineering"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Prompt Engineering
              </button>
              <button
                type="button"
                className="skillButton"
                name="mcp"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                MCP
              </button>
              <button
                type="button"
                className="skillButton"
                name="auth0"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Auth0
              </button>
            </div>
          </div>
          <div className="skillsList">
            <h3>Knowledgeable:</h3>
            <div className="techList">
              <button
                type="button"
                className="skillButton"
                name="aws"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                AWS
              </button>
              <button
                type="button"
                className="skillButton"
                name="gcp"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                GCP
              </button>
              <button
                type="button"
                className="skillButton"
                name="azure"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Azure
              </button>
              <button
                type="button"
                className="skillButton"
                name="python"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Python
              </button>
              <button
                type="button"
                className="skillButton"
                name="mailchimp"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                Mailchimp API
              </button>
              <button
                type="button"
                className="skillButton"
                name="datadog"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                DataDog
              </button>
              <button
                type="button"
                className="skillButton"
                name="logrocket"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                LogRocket
              </button>
            </div>
          </div>
        </div>
        <div id="techGraphic">
          <div id="laptopGraphic">
            <div id="techGraphicBox">
              <img
                src={`/images/techLogos/${logo}.png`}
                id="techGraphicLogo"
                alt="A tech logo graphic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="spacerDiv" />
      <a href="#projects" className="ARROW">
        <img
          src="/images/scroll.png"
          className="scrollArrow"
          alt="down arrow"
        />
      </a>
    </div>
  )
}

export default Tech
