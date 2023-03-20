import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./style.scss";

/**
 * Render a header with logo and nav bar
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img className="header-logo-logo" src={logo} alt="logo" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="header-logo-text">SportSee</span>
        </Link>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="header-text">Accueil</span>
      </Link>
      <Link to="/user/12" style={{ textDecoration: "none" }}>
        <span className="header-text">Profil</span>
      </Link>
      <Link to="/settings" style={{ textDecoration: "none" }}>
        <span className="header-text">Réglages</span>
      </Link>
      <Link to="/community" style={{ textDecoration: "none" }}>
        <span className="header-text">Communauté</span>
      </Link>
    </div>
  );
}

export default Header;
