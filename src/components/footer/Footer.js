import React from "react";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="http://alrafi-portfolio.herokuapp.com"> Abdullah Al Rafi</a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
