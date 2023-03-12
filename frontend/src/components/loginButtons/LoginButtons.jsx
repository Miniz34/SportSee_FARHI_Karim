import "./style.scss";
import { Link } from "react-router-dom";

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
