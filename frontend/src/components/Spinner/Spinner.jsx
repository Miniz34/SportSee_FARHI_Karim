import "./style.scss";
import loading from "../../assets/loading.gif";

/**
 * Render a loading spinner
 * @param {Array<Object>} props.data
 * @returns { React.Component } A React component
 */

function Spinner() {
  return (
    <div className="spinner-container">
      <img src={loading} alt="loading spinner" className="spinner" />
    </div>
  );
}

export default Spinner;
