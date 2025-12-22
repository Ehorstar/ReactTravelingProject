import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <div className="nav-center">
        <NavLink to="listpage" className="nav-link">
          Tours
        </NavLink>
        <NavLink to="tripshistory" className="nav-link">
          History
        </NavLink>
        <NavLink to="settings" className="nav-link">
          Settings
        </NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="registration" className="nav-link">
          <button className="button">Registration</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
