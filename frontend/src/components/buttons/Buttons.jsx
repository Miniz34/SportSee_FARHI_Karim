import Proptypes from "prop-types";

import "./style.scss";

/**
 * Render a button
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Buttons({ img }) {
  return (
    <div className="button">
      <img className="button-img" src={img} alt="bouton de filtres" />
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
