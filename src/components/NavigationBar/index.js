import "./index.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/ajd.svg";
import NavLinks from "../NavLinks";

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <NavLinks />
    </div>
  );
};

export default NavigationBar;
