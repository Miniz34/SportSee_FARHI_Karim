import Proptypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

/**
 * Render a button
 *
 * @category Components
 * @param {string} props.img - The URL of the image icon to display on the button.
 * @param {string} props.type - The type of button.
 * @param {number} props.userId - The ID of the user associated with the button.
 * @returns { React.Component } A React component
 */

function Buttons({ img, type, userId }) {
  return (
    <>
      {userId ? (
        <Link to={`/user/${userId}/${type}`} className="button">
          <img
            className="button-img"
            src={img}
            alt="bouton de filtres"
            target={"dashboard-main-smallgraph-container-1"}
          />
        </Link>
      ) : (
        <div to={`/user/${userId}/${type}`} className="button">
          <img
            className="button-img"
            src={img}
            alt="bouton de filtres"
            target={"dashboard-main-smallgraph-container-1"}
          />
        </div>
      )}
    </>
  );
}

Buttons.propTypes = {
  /**
  Type of the img
 */
  img: Proptypes.string,
};

export default Buttons;
