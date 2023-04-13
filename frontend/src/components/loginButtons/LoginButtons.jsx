import { Link } from "react-router-dom";

import "./style.scss";

/**
 * Render a button
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function LoginButtons() {
  return (
    <div className="loginContainer">
      <Link to="/user/12" className="loginButton">
        Karl
      </Link>
      <Link to="/user/18" className="loginButton">
        Cecilia
      </Link>
    </div>
  );
}

export default LoginButtons;
