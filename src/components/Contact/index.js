import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  function noReturn() {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }

  useEffect(() => {
    noReturn()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_bmryqud',
        'template_90wkfpx',
        refForm.current,
        'HaIotTeKMmmyzfp2Z'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities, espescially ambitious or
            large projects. However, if you have other requests or questions,
            please don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <div className="test">
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                </div>
                <li className="half">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="submit"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Williston, VT
          <br />
          USA
          <br />
          <span>hello@ajdube.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.438, -73.07]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.9, -71]}>
              <Popup>I live here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
