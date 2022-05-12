import React from "react";
import "../../styles/main/_main.scss";
import Button from "react-bootstrap/Button";

const Main = () => {
  return (
    <div className="main">
      <div className="background"></div>
      <div className="main-info">
        <div className="section-video">
          <div className="video-capture"> </div>
          <div className="player"></div>
        </div>
        <div className="invitation">
          <div className="invitation-title"></div>
          <span className="invitation-text">COMPRA, CONCURSA Y GANA</span>
          <Button variant="outline-info"> CONOCE CÓMO</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
