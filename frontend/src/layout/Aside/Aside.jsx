import Buttons from "../../components/buttons/Buttons";

import yoga from "../../assets/yoga.png";
import swim from "../../assets/swim.png";
import bike from "../../assets/bike.png";
import dumbbell from "../../assets/dumbbell.png";
import { useParams } from "react-router-dom";

import "./style.scss";

const arrBtn = [
  { url: "activity", name: yoga },
  { url: "average-session", name: swim },
  { url: "performance", name: bike },
  { url: "", name: dumbbell },
];

/**
 * Render an aside banner
 *
 * @category Layout
 * @component
 * @returns { React.Component } A React component
 */

function Aside() {
  const getId = useParams();
  const user = parseInt(getId.userId);
  return (
    <div className="aside">
      <div className="aside-logo-containers">
        {arrBtn.map((btn, index) => (
          <Buttons
            key={index}
            className="aside-logo-logo"
            img={btn.name}
            type={btn.url}
            userId={user}
          />
        ))}
      </div>
      <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
  );
}

export default Aside;
