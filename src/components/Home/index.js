import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'A',
    'n',
    't',
    'h',
    'o',
    'n',
    'y',
    ' ',
    'D',
    'u',
    'b',
    'e',
    ',',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  const noReturn = function () {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }

  useEffect(() => {
    noReturn()
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>e</span>
          <span className={`${letterClass} _13`}>l</span>
          <span className={`${letterClass} _14`}>l</span>
          <span className={`${letterClass} _15`}>o</span>
          <span className={`${letterClass} _16`}> </span>
          <span className={`${letterClass} _17`}>W</span>
          <span className={`${letterClass} _18`}>o</span>
          <span className={`${letterClass} _19`}>r</span>
          <span className={`${letterClass} _20`}>l</span>
          <span className={`${letterClass} _21`}>d</span>
          <span className={`${letterClass} _22`}>!</span>
          <br />
          <span className={`${letterClass} _23`}>I</span>
          <span className={`${letterClass} _24`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={25}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={39}
          />
        </h1>
        <h2>Digital Creator / Full Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
