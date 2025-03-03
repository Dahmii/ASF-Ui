import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../../../public/img/adventist-symbol--black.svg";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <section className="footer-container">
      <Fade duration={3000}>
        {/* <hr /> */}
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
            <ul
              style={{
                display: "flex",
                gap: "15px",
                listStyle: "none",
                padding: 0,
                marginTop: "-30px",
              }}
            >
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} color="#ebebeb" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="#ebebeb" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={30} color="#ebebeb" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} color="#ebebeb" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-note">
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
