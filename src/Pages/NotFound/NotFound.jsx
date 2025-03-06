import React from "react";
import "./NotFound.css";
import FuzzyText from "./FuzzyText";

const NotFound = () => {
  return (
    <section>
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        <h1>404</h1>
        <p>
          Find your way back to Jesus <a href="index.html">cross icon</a>{" "}
        </p>
      </FuzzyText>
    </section>
  );
};

export default NotFound;
