import "./style.scss";

function Buttons(props) {
  const { img } = props;

  return (
    <div className="button">
      <img className="button-img" src={img} />
    </div>
  );
}

export default Buttons;
