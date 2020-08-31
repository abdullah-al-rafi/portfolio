import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./slider.css";

function Slider() {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../img/sea.webp")}
            alt="Image"
          />
          <Carousel.Caption>
            <p>Scenery 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../img/leo.webp")}
            alt="Image"
          />
          <Carousel.Caption>
            <p>Scenery 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../img/nature.webp")}
            alt="Image"
          />
          <Carousel.Caption>
            <p>Scenery 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default Slider;
