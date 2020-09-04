import React from "react";
import Typical from "react-typical";

import "./typing.css";

function Typing() {
  return (
    <React.Fragment>
      <div className="typing">
        <h1>Hi, I am Abdullah Al Rafi 🎉</h1>
        <h2>Welcome to my portfolio website! 🎊</h2>
        <br />
        <h3>
          I'm a{" "}
          <Typical
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
        </h3>
      </div>
    </React.Fragment>
  );
}

export default Typing;
