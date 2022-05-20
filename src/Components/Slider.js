import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = ({ image, className }) => {
  return (
    <div style={{ maxWidth: "500px" }}>
      <Carousel>
        <div>
          <img src={image} className={className} />
        </div>
        <div>
          <img src={image} className={className} />
        </div>
        <div>
          <img src={image} className={className} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
