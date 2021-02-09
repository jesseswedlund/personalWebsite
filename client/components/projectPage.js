import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setStyle, setSelected} from '../store/navStyle'
import {setProject} from '../store/projects'
import project from './projectData'
import sr from '../scrollReveal'

const ProjectPage = props => {
  const handleChange = event => {
    let selectedProject = event.target.value
    props.setProject(selectedProject)
  }

  useEffect(() => {
    props.setStyle('navBar')
    props.setSelected('projects')

    const config = {
      origin: 'top',
      duration: 2000,
      delay: 200,
      reset: false,
      distance: '50px',
      scale: 1,
      easing: 'ease'
    }

    sr.reveal('.PROJECTPAGE', config)
  }, [])

  return (
    <div id="container" className="PROJECTPAGE">
      <div className="padding">
        <div className="projectSelectorBox">
          <div>
            <h2 className="projectName">
              {' '}
              Project: {project[props.selectedProject].name}
            </h2>
          </div>
          <div className="projectDropdownDiv">
            <select
              defaultValue={props.selectedProject}
              className="projectSelector"
              onChange={event => handleChange(event)}
            >
              <option type="text" value="haircutz">
                Haircutz
              </option>
              <option type="text" value="OEI">
                Outdoor Recreation Inc.
              </option>
              <option type="text" value="riverCoach">
                River Coach
              </option>
              <option type="text" value="sudokuSolver">
                Sudoku Solver
              </option>
              <option type="text" value="pnwWildwater">
                PNW Wildwater
              </option>
            </select>
          </div>
        </div>
        <div className="projectContent">
          <div className="projectMediaBox">
            {project[props.selectedProject].youtube.length ? (
              <iframe
                className="projectVideo"
                src={project[props.selectedProject].youtube}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={project[props.selectedProject].image}
                className="projectMedia"
              />
            )}
          </div>
          <div className="projectInfo">
            <div>
              <div className="projectInfoTitle">Description: </div>
              <div> {project[props.selectedProject].description}</div>
            </div>
            <div>
              <div className="projectInfoTitle">Tech Stack: </div>
              <div> {project[props.selectedProject].tech}</div>
            </div>
            <div>
              <div className="projectInfoTitle">My Role: </div>
              <div> {project[props.selectedProject].role}</div>
            </div>
            <div>
              <div className="projectInfoTitle">Deployed Product: </div>
              {project[props.selectedProject].url.length ? (
                <a
                  href={project[props.selectedProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="projectLink"
                >
                  {project[props.selectedProject].url}
                </a>
              ) : (
                <div>Project still in development, not deployed.</div>
              )}
            </div>
            {project[props.selectedProject].medium ? (
              <div>
                <div className="projectInfoTitle">Blog Post: </div>
                <a
                  href={project[props.selectedProject].medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="projectLink"
                >
                  Medium blog post picked up by "The Startup"
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <div className="captainsLogBox">
          <div className="captainsLog">
            <h2>About this Project:</h2>
            <div>
              {project[props.selectedProject].captains}
              <ul>
                {project[props.selectedProject].contributions.map(
                  (contribution, idx) => <li key={idx}>{contribution}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedProject: state.projects
})

const mapDispatchToProps = dispatch => ({
  setStyle: style => dispatch(setStyle(style)),
  setSelected: selected => dispatch(setSelected(selected)),
  setProject: proj => dispatch(setProject(proj))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)
