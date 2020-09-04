import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          <a
            target="_blank"
            className="badge"
            href="http://www.djangoproject.com/"
          >
            <img
              src="https://www.djangoproject.com/m/img/badges/djangomade124x25.gif"
              border="0"
              alt="Made with Django & React."
              title="Made with Django & React."
            />
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/abdullahalrafi/"
          >
            <FaLinkedin size={40} style={{ color: "#005888" }} />
          </a>{" "}
          <a target="___blank" href="https://github.com/alrafiabdullah">
            <FaGithubSquare size={40} style={{ color: "#000" }} />
          </a>{" "}
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
