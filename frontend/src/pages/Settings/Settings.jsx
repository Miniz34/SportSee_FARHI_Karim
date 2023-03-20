import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";
import worker from "../../assets/worker.gif";

import "./style.scss";

/**
 * Render the Settings page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */

function Settings() {
  return (
    <>
      <Header />
      <Aside />
      <div className="community-wrapper">
        <p className="community-text">En construction</p>
        <img src={worker} alt="worker animation" />
      </div>
      ;
    </>
  );
}

export default Settings;
