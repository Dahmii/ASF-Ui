import React from "react";
import "./Hero.css";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className="hero-container">
      <Fade duration={3000}>
        <div className="hero-text">
          <p>
            In partnership with <span>His Spirit</span>
          </p>
          <h1>
            A lot can happen if you <span>surrender</span> your life to Jesus
          </h1>
          <p>
            Nothing can be compared to the love of Jesus. For God so loved the
            world that he gave his one and only son, that whoever believes in
            him shall not perish but have eternal life.
          </p>
        </div>

        <div className="hero-btn">Accept Jesus</div>
      </Fade>
    </section>
  );
};

export default Hero;
