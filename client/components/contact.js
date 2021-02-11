import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {setStyle, setSelected} from '../store/navStyle'
import emailjs from 'emailjs-com'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Emoji from './emoji'
import sr from '../scrollReveal'

const Contact = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    props.setStyle('navBar')
    props.setSelected('contact')

    const config = {
      origin: 'top',
      duration: 2000,
      delay: 200,
      reset: false,
      distance: '50px',
      scale: 1,
      easing: 'ease'
    }

    sr.reveal('.contactPage', config)
  }, [])

  const handleInputChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value)
        break
      case 'email':
        setEmail(evt.target.value)
        break
      case 'message':
        setMessage(evt.target.value)
        break
      default:
        break
    }
  }

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_z6em7jd',
        'template_lnhbw0d',
        e.target,
        'user_PnD5NOErAPqELgc3HO316'
      )
      .then(
        result => {
          toast.success('Your message has successfully sent!', {
            position: toast.POSITION.BOTTOM_CENTER
          })
          console.log(result.text)
          setName('')
          setEmail('')
          setMessage('')
        },
        error => {
          toast.error('Your message was not able to be sent')
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contactPage">
      <h2>
        Drop me a line{' '}
        <Emoji symbol="👇" label="backhand index pointing down" />
      </h2>
      <div className="contactBox">
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={event => handleInputChange(event)}
            placeholder="Your name"
            required
            value={name}
            style={{width: '100%'}}
            rows={1}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={event => handleInputChange(event)}
            placeholder="Your email address"
            required
            value={email}
            style={{width: '100%'}}
            rows={1}
          />
          <label>Message</label>
          <textarea
            name="message"
            onChange={event => handleInputChange(event)}
            placeholder="What would you like to chat about?"
            required
            value={message}
            style={{width: '100%', height: '250px'}}
          />
          <div className="sendButtonBox">
            <input type="submit" value="Send" id="sendButton" />
          </div>
        </form>
        <ToastContainer />
      </div>
      <div className="spacerDivBig" />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setStyle: style => dispatch(setStyle(style)),
  setSelected: selected => dispatch(setSelected(selected))
})

export default connect(null, mapDispatchToProps)(Contact)
