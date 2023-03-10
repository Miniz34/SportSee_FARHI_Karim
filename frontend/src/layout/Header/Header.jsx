import "./style.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img className="header-logo-logo" src={logo} alt="logo" />
        <span className="header-logo-text">SportSee</span>
      </div>
      <span className="header-text">Accueil</span>
      <span className="header-text">Profil</span>
      <span className="header-text">Réglages</span>
      <span className="header-text">Communauté</span>
    </div>
  );
}

export default Header;
