import React from "react";
import { FaBicycle } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

import "./about.css";

function About() {
  return (
    <React.Fragment>
      <h3>About Me</h3>
      <div className="aboutContent">
        <p>
          I am currently pursuing my BSc in Computer Science and Engineering
          from <strong>NORTH SOUTH UNIVERSITY</strong>. My interest in
          technology and creativeness motivated me to pursue this field.
        </p>
        <p>
          I am <strong>ENTHUSIASTIC</strong> about learning, keeping up to date
          and improving myself along the way. I do my tasks with the utmost care
          and sheer <strong>DETERMINATION</strong> to give the best possible
          output within the given time.
        </p>
        <p>
          I have interests in:
          <ul>
            <p>
              Artificial Intelligence, Natural Language Processing, Big Data,
              Data Science.
            </p>
          </ul>
        </p>
        <p>
          Things I do in leisure:
          <ul>
            <li>
              Cycling &nbsp;{" "}
              <FaBicycle size={30} style={{ color: "#d31b7a" }} />
            </li>
            <li>
              Gaming &nbsp; <FaGamepad size={30} style={{ color: "#d31b7a" }} />
            </li>
          </ul>
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1hEXWoN-yyig-oHW3OQNrrTa72D0pmmcE/view?usp=sharing"
        >
          <button className="resumeButton">Resume</button>
        </a>
      </div>
    </React.Fragment>
  );
}

export default About;
