import PropTypes from "prop-types";

/**
 * Render a tooltip for DailyCharts
 *
 * @category Components
 * @param {boolean} props.active - Flag indicating whether the tooltip is active.
 * @param {object[]} props.payload - The payload object for the tooltip.
 * @returns { React.Component } A React component
 */
function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-daily">
        <p>{payload[0].value + "kg"}</p>
        <p>{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
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
