import React from "react";
import "./Join.css";
import joinUsImage from "../../../public/img/join-us.png";

const Join = () => {
  return (
    <section className="join-container">
      <div className="join-content">
        <img src={joinUsImage} alt="Join Us" />

        <div className="join-text">
          <h1>
            Join us in <span>worship</span> as we lift our hearts to God
          </h1>
          <div className="join-btn">worship with us</div>
        </div>
      </div>
    </section>
  );
};

export default Join;
