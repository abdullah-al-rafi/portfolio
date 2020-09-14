import React from "react";
import { Parallax } from "react-parallax";

import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";

function Body() {
  const blackStyle = {
    backgroundColor: "rgba(0,0,0, 0.7)",
    borderRadius: "20px",
    color: "white",
    margin: "10%",
    padding: "5%",
  };

  const whiteStyle = {
    backgroundColor: "rgba(255,255,255, 0.7)",
    borderRadius: "10px",
    color: "black",
    padding: "5%",
  };

  const styles = {
    height: "700px",
    aspectRatio: "16/9",
  };

  return (
    <React.Fragment>
      <Parallax
        className="about"
        bgImage={require("../img/white.png")}
        strength={700}
      >
        <div style={styles}>
          <div style={blackStyle}>
            <About />
          </div>
        </div>
      </Parallax>
      <Parallax
        className="skills"
        bgImage="none"
        renderLayer={(percentage) => (
          <div>
            <div
              className="skills"
              style={{
                // backgroundColor: "white",
                // opacity: "80%",
                color: "#DB353B",
                position: "absolute",
                width: "60%",
                height: "40%",
                scale: `none`,
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${percentage * 3})`,
              }}
            >
              <div style={whiteStyle}>
                <Skills />
              </div>
            </div>
          </div>
        )}
      >
        <div style={styles}></div>
      </Parallax>
      <Parallax
        className="projects"
        bgImage={require("../img/white.png")}
        strength={700}
      >
        <div style={styles}>
          <div style={blackStyle}>
            <h3>Project Section</h3>
            <Projects />
          </div>
        </div>
      </Parallax>
    </React.Fragment>
  );
}

export default Body;
