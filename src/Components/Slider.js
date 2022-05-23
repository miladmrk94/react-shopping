import React from "react";
import styles from "../styles/Silder.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = ({ image, className }) => {
  return (
    <div style={{ maxWidth: "500px" }}>
      <Carousel showStatus={false} className={styles.def}>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
