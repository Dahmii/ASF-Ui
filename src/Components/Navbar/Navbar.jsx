import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../public/img/adventist-en-centered--black.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Worship</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
