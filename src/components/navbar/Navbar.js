import React from "react";
import Final from "./final.png";
import { Link } from "react-scroll";

import "./navbar.css";

function Navbar() {
  return (
    <React.Fragment>
      <header>
        <a target="__blank" href="https://alrafi-portfolio.herokuapp.com">
          <img class="logo" src={Final} alt="Brand" />
        </a>
        <nav>
          <ul class="nav__links">
            <Link to="about" smooth={true} duration={500}>
              <li>
                <a href="#">About</a>
              </li>
            </Link>
            <Link to="skills" smooth={true} duration={700}>
              <li>
                <a href="#">Skills</a>
              </li>
            </Link>
            <Link to="projects" smooth={true} duration={900}>
              <li>
                <a href="#">Projects</a>
              </li>
            </Link>
          </ul>
        </nav>
        <Link class="cta" to="contact" smooth={true} duration={1100}>
          <button>Contact</button>
        </Link>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
