import "./styles.scss";
import calorieIcon from "../../assets/calorie.png";
import proteinIcon from "../../assets/protein.png";
import carbIcon from "../../assets/carb.png";
import lipidIcon from "../../assets/lipid.png";

function Nutrients({ food, quantity }) {
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
      foodDisplay = "help";
      classIcon = "nutrient-container-icon-calorie";
      type = "g";
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
            {quantity}
            {type}
          </div>

          <div className="nutrient-container-data-name">{foodDisplay}</div>
        </div>
      </div>
    </div>
  );
}

export default Nutrients;
