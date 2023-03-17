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

export default CustomToolTip;
