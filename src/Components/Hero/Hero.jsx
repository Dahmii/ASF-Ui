import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <p>
          In partnership with <span>His Spirit</span>
        </p>
        <h1>
          A lot can happen if you <span>surrender</span> your life to Jesus
        </h1>
        <p>
          Nothing can be compared to the love of Jesus. For God so loved the
          world that he gace his one and only son, that whoever believes in him
          shall not perish but have eternal life.
        </p>
      </div>

      <div className="hero-btn">Accept Jesus</div>
    </section>
  );
};

export default Hero;
