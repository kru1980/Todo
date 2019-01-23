import React from "react";
import "./SliderComponent.css";

import { Carousel } from "antd";

const SliderComponent = () => {
  var settings = {
    dots: true,
    initialSlide: 2,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    fade: true
  };
  return (
    <div>
      <Carousel {...settings}>
        <div className="baner1">hello baner1</div>
        <div className="baner2">hello baner2</div>
      </Carousel>
    </div>
  );
};

export default SliderComponent;
