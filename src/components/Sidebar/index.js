import { Link } from 'react-router-dom'
import './index.scss'
import LogoAJD from '../../assets/images/logo-ajd.png'
import LogoSignature from '../../assets/images/logo-sig.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigation from '../Navigation'
import MobileNavigation from '../MobileNavigation'
import Socials from '../Socials'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoAJD} alt="logo" />
        <img className="sig-logo" src={LogoSignature} alt="Anthony J. Dube" />
      </Link>
      <div className="menu">
        <FontAwesomeIcon
          icon={faAddressCard}
          color="#fff"
          opacity="0.3"
          onClick={() => setOpen(!open)}
        />
      </div>
      <Navigation />
      {open && <MobileNavigation />}
      <Socials mobile={'desktop'} />
    </div>
  )
}

export default Sidebar
