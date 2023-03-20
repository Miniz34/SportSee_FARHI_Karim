import "./style.scss";
import loading from "../../assets/loading.gif";

function Spinner() {
  return (
    <div className="spinner-container">
      <img src={loading} alt="loading spinner" className="spinner" />
    </div>
  );
}

export default Spinner;
