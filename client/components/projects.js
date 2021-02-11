import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setProject} from '../store/projects'
import sr from '../scrollReveal'

const Projects = props => {
  const handleClick = event => {
    props.setProject(event.target.id)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

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

    sr.reveal('.project', config)
    sr.reveal('.ARROW', config)
  }, [])

  return (
    <div className="sectionBox" id="projects">
      <div className="sectionName">Featured Projects</div>
      <hr className="underline" />
      <div className="selectProject"> Select a project to learn more</div>
      <div className="projectBox">
        <div className="project" id="project1">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/haircutz.png"
              className="projectImg"
              id="haircutz"
              alt="Haircutz game image"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>
            <Link
              to="/projects"
              className="projectLink"
              id="haircutz"
              onClick={event => handleClick(event)}
            >
              Haircutz
            </Link>{' '}
            - a 2D multiplayer tower defense game
          </h4>
        </div>
        <div className="project">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/OEI.png"
              className="projectImg"
              id="OEI"
              alt="OEI image"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>
            <Link
              to="/projects"
              className="projectLink"
              id="OEI"
              onClick={event => handleClick(event)}
            >
              Outdoor Equipment Inc.
            </Link>{' '}
            - REI Ecommerce site clone
          </h4>
        </div>
      </div>
      <div className="projectBox">
        <div className="project">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/riverCoach.png"
              className="projectImg"
              id="riverCoach"
              alt="River Coach image"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>
            <Link
              to="/projects"
              className="projectLink"
              id="riverCoach"
              onClick={event => handleClick(event)}
            >
              River Coach
            </Link>{' '}
            - PWA for connecting with whitewater paddlers
          </h4>
        </div>
        <div className="project">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/sudokuSolver.png"
              className="projectImg"
              id="sudokuSolver"
              alt="Sudoku Solver image"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>
            <Link
              to="/projects"
              className="projectLink"
              id="sudokuSolver"
              onClick={event => handleClick(event)}
            >
              Sudoku Solver
            </Link>{' '}
            - a web app that can solve most expert level sudokus.
          </h4>
        </div>
      </div>
      <a href="#experience" className="ARROW">
        <img
          src="/images/scroll.png"
          className="scrollArrow"
          alt="down arrow"
        />
      </a>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setProject: proj => dispatch(setProject(proj))
})

export default connect(null, mapDispatchToProps)(Projects)
