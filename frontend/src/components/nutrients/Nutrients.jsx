import PropTypes from "prop-types";

import calorieIcon from "../../assets/calorie.png";
import proteinIcon from "../../assets/protein.png";
import carbIcon from "../../assets/carb.png";
import lipidIcon from "../../assets/lipid.png";

import "./styles.scss";

/**
 * Render a div (nutrient) containing the Cards
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Nutrients({ food, quantity }) {
  console.log(food, quantity);
  let icon = "";
  let foodDisplay = "";
  let classIcon = "";
  let type = "";

  switch (food) {
    case "calorieCount":
      icon = calorieIcon;
      foodDisplay = "Calories";
      classIcon = "nutrient-container-icon-calorie";
      type = "kCal";
      break;
    case "proteinCount":
      icon = proteinIcon;
      foodDisplay = "Proteines";
      classIcon = "nutrient-container-icon-protein";
      type = "g";
      break;
    case "carbohydrateCount":
      icon = carbIcon;
      foodDisplay = "Glucides";
      classIcon = "nutrient-container-icon-carb";
      type = "g";
      break;
    case "lipidCount":
      icon = lipidIcon;
      foodDisplay = "Lipides";
      classIcon = "nutrient-container-icon-lipid";
      type = "g";
      break;
    default:
      icon = calorieIcon;
      foodDisplay = "Nutriment";
      classIcon = "nutrient-container-icon-calorie";
      type = "g";
  }

  function addComma(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="nutrient">
      <div className="nutrient-container">
        <div className={`nutrient-container-icon ${classIcon}`}>
          <img className="svg" src={icon} alt="icone" />
        </div>
        <div className="nutrient-container-data">
          <div className="nutrient-container-data-value">
            {" "}
            {addComma(Number(quantity))}
            {type}
          </div>

          <div className="nutrient-container-data-name">{foodDisplay}</div>
        </div>
      </div>
    </div>
  );
}

Nutrients.propTypes = {
  /**
   Food of the card
   */
  food: PropTypes.string,

  /**
   Quantity of the card
   */
  quantity: PropTypes.number,
};

export default Nutrients;
