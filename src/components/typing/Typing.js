import React from "react";
import Typical from "react-typical";

import "./typing.css";

function Typing() {
  return (
    <React.Fragment>
      <div className="typing">
        <h2>
          <span style={{ color: "#d31b7a" }}>Hi</span>, I am{" "}
          <span style={{ color: "#d31b7a" }}>Abdullah</span>. 🎉
        </h2>
        <h3 role="img">Welcome to my portfolio website! 🎊</h3>
        <br />
        <h4>
          I'm a{" "}
          <span style={{ color: "#d31b7a" }}>
            <Typical
              role="img"
              loop={Infinity}
              wrapper="b"
              steps={[
                3000,
                "Django developer! 😎",
                1500,
                "Python enthusiast! 🦄",
                1500,
                "future Data Scientist! 🤩",
                1500,
                "Simulation game lover! 👻",
                1500,
                "DVa main! 😍",
                1500,
              ]}
            ></Typical>
          </span>
        </h4>
      </div>
    </React.Fragment>
  );
}

export default Typing;
