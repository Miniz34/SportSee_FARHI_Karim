import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";

import "./style.scss";

/**
 * Render the error page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */

function Error() {
  return (
    <>
      <Header />
      <Aside />
      <div className="error">
        <h2 className="error-title">Error 404</h2>
        <p className="error-text">Oops, something went wrong ...</p>
      </div>
    </>
  );
}

export default Error;
