import "./styles.scss";
import calorieIcon from "../../assets/calorie.png";
import proteinIcon from "../../assets/protein.png";
import carbIcon from "../../assets/carb.png";
import lipidIcon from "../../assets/lipid.png";

function Nutrients({ food, quantity }) {
  let icon = "";
  let foodDisplay = "";

  switch (food) {
    case "calorieCount":
      icon = calorieIcon;
      foodDisplay = "Calories";
      break;
    case "proteinCount":
      icon = proteinIcon;
      foodDisplay = "Proteines";
      break;
    case "carbohydrateCount":
      icon = carbIcon;
      foodDisplay = "Glucides";
      break;
    case "lipidCount":
      icon = lipidIcon;
      foodDisplay = "Lipides";
      break;
    default:
      icon = calorieIcon;
      foodDisplay = "help";
  }

  return (
    <div className="nutrient">
      <div className="nutrient-container">
        <div className="nutrient-container-icon">
          <img src={icon} alt="icone" />
        </div>
        <div className="nutrient-container-data">
          <div className="nutrient-container-data-value">{quantity}</div>

          <div className="nutrient-container-data-name">{foodDisplay}</div>
        </div>
      </div>
    </div>
  );
}

export default Nutrients;
