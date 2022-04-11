import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGit,
  faNpm,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  function noReturn() {
    setTimeout(() => {
      setLetterClass('text-animate-hover colored')
    }, 4000)
  }

  useEffect(() => {
    noReturn()
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a junior developer looking for a role in an established software
            company where I can leverage and enhance my analytical, technical,
            and computer skillset.
          </p>
          <p>
            I am quietly confident, naturally curious, and perpetually working
            to improve my skills and knowledge.
          </p>
          <p>
            I'm happily married and recently adopted a rescue pup. I enjoy
            travelling, playing chess and listening to 90's music.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNpm} color="#CC3534" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
