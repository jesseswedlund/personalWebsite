import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setStyle} from '../store/navStyle'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'

const NotFound = props => {
  useEffect(() => {
    props.setStyle('navBar')
  }, [])

  return (
    <div className="pageLength">
      <div className="notFoundPage">
        <div className="notFoundContentBox">
          <img
            src="/images/notFound.jpg"
            className="notFoundGraphic"
            alt="404 Not Found Graphic"
          />
        </div>
        <div className="backToHomePageBox">
          <Link
            to="/"
            className="jobLink"
            onClick={() =>
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }
          >
            <FontAwesomeIcon icon={faArrowCircleLeft} /> Back to the Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setStyle: style => dispatch(setStyle(style))
})

export default connect(null, mapDispatchToProps)(NotFound)
