import React from "react";
import "./Banner.css";
import BlurText from "./BlurText"; // Import the BlurText component

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-text">
        <h1>
          <BlurText
            text="Saturdays"
            animateBy="words"
            direction="top"
            delay={200}
          />
        </h1>
        <p>at 8:30 AM</p>
        <p>
          in person or <a href="#">Online</a>
        </p>
      </div>
    </section>
  );
};

export default Banner;
