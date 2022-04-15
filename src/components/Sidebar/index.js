import { Link } from 'react-router-dom'
import './index.scss'
import LogoAJD from '../../assets/images/logo-ajd.png'
import LogoSignature from '../../assets/images/logo-sig.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigation from '../Navigation'
import Socials from '../Socials'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoAJD} alt="logo" />
        <img className="sig-logo" src={LogoSignature} alt="Anthony J. Dube" />
      </Link>
      <div className="menu">
        <FontAwesomeIcon icon={faBars} color="#fff" />
      </div>
      <Navigation />
      <Socials />
    </div>
  </>
)

export default Sidebar
