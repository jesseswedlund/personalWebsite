import React, {useEffect} from 'react'
import experience from './experienceData'
import sr from '../scrollReveal'

const Experience = () => {
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

    sr.reveal('.experienceBox', config)
  }, [])

  return (
    <div id="experience" className="EXPERIENCE">
      <div className="sectionName">Education & Experience</div>
      <hr className="underlineLong" />
      {experience.map((job, idx) => (
        <div key={idx} className="experienceBox">
          <a
            href={job.website}
            className="experiencePhotoBox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={job.photo} className="experiencePhoto" />
          </a>
          <div className="experienceDescription">
            <div className="experienceTitleBox">
              <a
                href={job.website}
                className="experiencePhotoBoxSmall"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={job.photo} className="experiencePhoto" />
              </a>
              <div className="experienceTitleBoxSmall">
                <h3 className="experienceTitle">
                  <span style={{fontWeight: 'bolder'}}>{job.title}</span> -{' '}
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jobLink"
                  >
                    {job.workplace}
                  </a>
                  ,{' '}
                  <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>
                    {job.location}
                  </span>
                </h3>
                <div className="datesBox">{job.major}</div>
                <div>{job.dates}</div>
              </div>
            </div>
            <ul className="experienceDuties">
              {job.duties.map((duty, idx) => <li key={idx}>{duty}</li>)}
            </ul>
          </div>
        </div>
      ))}
      <div className="spacerDiv" />
      <a
        className="jobLink"
        href="/Jesse Swedlund Resume.pdf"
        download="Jesse Swedlund Resume.pdf"
      >
        Download Resume
      </a>
      <div className="spacerDiv" />
    </div>
  )
}

export default Experience
