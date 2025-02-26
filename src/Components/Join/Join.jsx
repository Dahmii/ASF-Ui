import React from "react";
import "./Join.css";
import joinUsImage from "../../../public/img/join-us.png";
import { Fade } from "react-awesome-reveal";

const Join = () => {
  return (
    <section className="join-container">
      <Fade duration={3000}>
        <div className="join-content">
          <img src={joinUsImage} alt="Join Us" />

          <div className="join-text">
            <h1>
              Join us in <span>worship</span> as we lift our hearts to God
            </h1>
            <div className="join-btn">worship with us</div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Join;
