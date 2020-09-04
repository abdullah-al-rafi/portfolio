import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaDev,
  FaInstagramSquare,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          <a
            target="__blank"
            href="https://www.linkedin.com/in/abdullahalrafi/"
          >
            <FaLinkedin size={40} style={{ color: "#0073B0" }} />
          </a>{" "}
          <a target="___blank" href="https://github.com/alrafiabdullah">
            <FaGithubSquare size={40} style={{ color: "#000" }} />
          </a>{" "}
          <a target="____blank" href="https://medium.com/@abdullahalrafi">
            <FaMedium size={40} style={{ color: "#000" }} />
          </a>{" "}
          <a target="_____blank" href="https://dev.to/abdullahalrafi">
            <FaDev size={40} style={{ color: "#000" }} />
          </a>{" "}
          <a
            target="______blank"
            href="https://www.instagram.com/its_not_good_but_i_still/"
          >
            <FaInstagramSquare size={40} style={{ color: "#E1306C" }} />
          </a>
          <br />
          <br />
          This website is built with{" "}
          <a target="_blank" href="https://www.djangoproject.com/">
            Django
          </a>{" "}
          &{" "}
          <a target="_______blank" href="https://reactjs.org/">
            React
          </a>
          .
          <br />© 2020 Copyright:
          <a
            style={{ color: "#0C4B33" }}
            href="http://alrafi-portfolio.herokuapp.com"
          >
            {" "}
            Abdullah Al Rafi
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
