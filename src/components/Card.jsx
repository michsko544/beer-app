import "./Card.style.css";
import Tilt from "react-tilt";

const Card = ({ title, subtitle, description }) => {
  const tiltConfig = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
  };

  return (
    <Tilt className="card-inner" options={tiltConfig}>
      <h3>{title}</h3>
      <h5>{subtitle}</h5>
      <p>{description}</p>
    </Tilt>
  );
};

export default Card;
