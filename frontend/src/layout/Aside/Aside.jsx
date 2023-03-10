import "./style.scss";
import Buttons from "../../components/buttons/Buttons";
import yoga from "../../assets/yoga.png";
import swim from "../../assets/swim.png";
import bike from "../../assets/bike.png";
import dumbbell from "../../assets/dumbbell.png";

const arrBtn = [yoga, swim, bike, dumbbell];

function Aside() {
  console.log(arrBtn);
  return (
    <div className="aside">
      <div className="aside-logo-containers">
        {arrBtn.map((btn, index) => (
          <Buttons key={index} className="aside-logo-logo" img={btn} />
        ))}
      </div>
      <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
  );
}

export default Aside;
