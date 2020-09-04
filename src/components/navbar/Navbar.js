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
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </nav>
        <Link class="cta" to="contact" smooth={true} duration={1000}>
          <button>Contact</button>
        </Link>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
