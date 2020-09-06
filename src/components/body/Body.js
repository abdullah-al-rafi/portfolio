import React from "react";
import { Parallax } from "react-parallax";

// import "./body.css";

function Body() {
  const inlineStyle = {
    background: "#fff",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50%, -50%)",
  };

  const styles = {
    height: "900px",
    aspectRatio: "16/9",
  };

  return (
    <React.Fragment>
      <Parallax
        className="about"
        bgImage={require("../img/nature.webp")}
        strength={-500}
      >
        <div style={styles}>
          <div style={inlineStyle}>About Section</div>
        </div>
      </Parallax>
      <Parallax
        className="skills"
        bgImage={require("../img/python.png")}
        renderLayer={(percentage) => (
          <div
            className="skills"
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: `rgba(255, 123, 23, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${percentage * 5})`,
            }}
          ></div>
        )}
      >
        <div style={styles}>
          <div style={inlineStyle}>Skills Section</div>
        </div>
      </Parallax>
      <Parallax
        className="projects"
        bgImage={require("../img/sea.webp")}
        strength={700}
      >
        <div style={styles}>
          <div style={inlineStyle}>Project Section</div>
        </div>
      </Parallax>
    </React.Fragment>
  );
}

export default Body;
