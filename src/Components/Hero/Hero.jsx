import React from "react";
import "./Hero.css";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero-container">
        <Fade duration={3000}>
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle">
                In partnership with <span>His Spirit</span>
              </p>
              <h1 className="hero-heading">
                A lot can happen if you <span>surrender</span> your life to
                Jesus
              </h1>
              <p className="hero-description">
                Nothing can be compared to the love of Jesus. For God so loved
                the world that he gave his one and only son, that whoever
                believes in him shall not perish but have eternal life.
              </p>
            </div>

            <div className="hero-btn-container">
              <button className="hero-btn">Accept Jesus</button>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Hero;
