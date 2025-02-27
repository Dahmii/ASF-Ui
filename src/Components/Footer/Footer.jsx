import React from "react";
import "./Footer.css";
import logo from "../../../public/img/adventist-symbol--black.svg";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <section className="footer-container">
      <Fade duration={3000}>
        <hr />
        <div className="footer-content">
          <div className="footer-text">
            <h1>
              Want someone to <br />
              <span>Pray with you?</span>
            </h1>
          </div>
          <div className="items">
            <ul>
              <li>
                <a href="#">SDA church around you</a>
              </li>
              <li>
                <a href="#">Worship</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Hotline</a>
              </li>
            </ul>
          </div>

          <div className="socials">
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">X</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-note">
          <img
            src={logo}
            alt="Seventh-day Adventist Church Logo"
            className="footer-logo"
          />
          <p>
            © {new Date().getFullYear()} Seventh-day Adventist Church, Okebola.
            All Rights Reserved.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Footer;
