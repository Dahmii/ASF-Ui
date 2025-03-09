import React from "react";
import "./Miracles.css";
import { Fade } from "react-awesome-reveal";

const Miracles = () => {
  return (
    <section className="miracle-container">
      <Fade duration={3000}>
        <div className="miracle-text">
          <h1>
            Miracles still happen if you <span>believe!</span>
          </h1>
        </div>
      </Fade>
    </section>
  );
};

export default Miracles;
