import PropTypes from "prop-types";

/**
 * Render a ToolTip for AverageSession
 *
 * @category Pages
 * @param {boolean} props.active - Flag indicating whether the tooltip is active.
 * @param {object[]} props.payload - The payload object for the tooltip.
 * @returns { React.Component } A React component
 */

function CustomToolTip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="tooltip-average">
        <p>{payload[0].value} min</p>
      </div>
    );
  } else {
    return null;
  }
}

CustomToolTip.propTypes = {
  /**
   * Whether or not the tooltip is active
   */
  active: PropTypes.bool,
  /**
   * The payload of the tooltip
   */
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default CustomToolTip;
