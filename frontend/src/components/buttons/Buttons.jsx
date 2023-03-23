import Proptypes from "prop-types";
import { useState } from "react";

import "./style.scss";

/**
 * Render a button
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Buttons({ img }) {
  const [toggle, setToggle] = useState(false);

  function select(elem) {
    const changeStyle = elem.target.parentNode;

    if (!toggle) {
      changeStyle.style.backgroundColor = "green";
      setToggle(true);
    } else if (toggle) {
      changeStyle.style.backgroundColor = "white";
      setToggle(false);
    }
  }
  return (
    <div className="button">
      <img
        className="button-img"
        src={img}
        alt="bouton de filtres"
        onClick={select}
        target={"dashboard-main-smallgraph-container-1"}
      />
    </div>
  );
}

Buttons.propTypes = {
  /**
  Type of the img
 */
  img: Proptypes.string,
};

export default Buttons;
