import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import psmPNG from "../assets/Psm-min.png";
import courseraPNG from "../assets/CorSera-min.png";
import dataPNG from "../assets/Data-min.png";
import ironhack from "../assets/Ironhack.png";

function Slides() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ironhack}
          alt="ironhack certification slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={courseraPNG} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dataPNG} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={psmPNG} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
