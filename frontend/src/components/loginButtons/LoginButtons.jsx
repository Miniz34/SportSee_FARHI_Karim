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
    <>
      <div className="captcha-wrapper">
        <h2>Captcha</h2>
        <p>Veuillez sélectionner Samuel L Jackson</p>
        <div className="img-wrapper">
          <Link to="/wrongcaptcha" className="wrong-img">
            <img
              src="https://static.toiimg.com/thumb/msid-64953923,width-800,height-600,resizemode-75,imgsize-70856,pt-32,y_pad-40/64953923.jpg"
              alt="hello 1"
              className="img-1"
            />
          </Link>
          <Link to="/user/12" className="wrong-img">
            <img
              src="https://fr.web.img5.acsta.net/pictures/15/07/27/12/24/354255.jpg"
              alt="hello 2"
              className="img-2"
            />
          </Link>
        </div>
      </div>
    </>
    // <div className="loginContainer">
    //   <Link to="/user/12" className="loginButton">
    //     Karl
    //   </Link>
    //   <Link to="/user/18" className="loginButton">
    //     Cecilia
    //   </Link>
    // </div>
  );
}

export default LoginButtons;
