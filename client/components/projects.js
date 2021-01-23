import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setProject} from '../store/projects'

const Projects = props => {
  const handleClick = event => {
    console.log(event.target.id)
    props.setProject(event.target.id)
  }

  return (
    <div className="sectionBox" id="projects">
      <div className="sectionName">Featured Projects</div>
      <hr className="underline" />
      <div className="selectProject"> Select a project to learn more</div>
      <div className="projectBox">
        <div className="project">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/haircutz.png"
              className="projectImg"
              id="haircutz"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>"Haircutz" - a 2D multiplayer tower defense game</h4>
        </div>
        <div className="project">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/OEI.png"
              className="projectImg"
              id="OEI"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>"Outdoor Equipment Inc." - REI Ecommerce site clone</h4>
        </div>
        <div className="project" id="riverCoach">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/riverCoach.png"
              className="projectImg"
              id="riverCoach"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>"River Coach" - PWA for connecting with whitewater paddlers</h4>
        </div>
        <div className="project">
          <Link to="/projects" className="projectLink">
            <img
              src="/images/sudokuSolver.png"
              className="projectImg"
              id="sudokuSolver"
              onClick={event => handleClick(event)}
            />
          </Link>
          <h4>
            "Sudoku Solver" - a program that solves Sudokus up to level "hard".
          </h4>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setProject: proj => dispatch(setProject(proj))
})

export default connect(null, mapDispatchToProps)(Projects)
