import React from "react";
import { Parallax } from "react-parallax";
import Carousel from "react-bootstrap/Carousel";

function Body() {
  const inlineStyle = {
    background: "#fff",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50%, -50%)",
  };

  return (
    <React.Fragment>
      <Parallax bgImage={require("../img/sea.webp")} strength={700}>
        <div className="about" style={{ height: "500px" }}>
          <div style={inlineStyle}>About Section</div>
        </div>
      </Parallax>
      <Parallax
        bgImage={require("../img/leo.webp")}
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
        <div style={{ height: "500px" }}>
          <div className="projects" style={inlineStyle}>
            Skills Section
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={require("../img/nature.webp")} strength={-300}>
        <div style={{ height: "500px" }}>
          <div style={inlineStyle}>Project Section</div>
        </div>
      </Parallax>
    </React.Fragment>
  );
}

export default Body;
