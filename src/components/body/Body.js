import React from "react";
import { Parallax } from "react-parallax";

// import "./body.css";

function Body() {
  const inlineStyle = {
    color: "#d31b7a",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50%, -50%)",
  };

  const styles = {
    height: "950px",
    aspectRatio: "16/9",
  };

  return (
    <React.Fragment>
      <Parallax
        className="about"
        bgImage={require("../img/white.png")}
        strength={-500}
        style={{ borderBottom: "20px solid white" }}
      >
        <div style={styles}>
          <div style={inlineStyle}>
            <h3>About Section</h3>
          </div>
        </div>
      </Parallax>
      <Parallax
        className="skills"
        // blur={{ min: -1, max: 10 }}
        bgImage="none" //{require("../img/2.png")}
        renderLayer={(percentage) => (
          <div
            className="skills"
            style={{
              color: "#d31b7a",
              position: "absolute",
              width: "100px",
              height: "100px",
              scale: `none`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${percentage * 5})`,
            }}
          >
            <h5>Skills Section</h5>
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
          <div style={inlineStyle}>
            <h3>Project Section</h3>
          </div>
        </div>
      </Parallax>
    </React.Fragment>
  );
}

export default Body;
