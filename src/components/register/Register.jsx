import React from "react";
import Nav from "../nav/Nav";
import "../../styles/register/_register.scss";
import Button from "react-bootstrap/Button";

// import video from "../../assets/images/video/video-mob.png";

const Register = () => {
  return (
    <div className="main">
      <Nav />
      <div className="main-info">
        <div className="section-video">
          <div className="video-capture"> </div>
        </div>
        <div className="invitation">
          <div className="title">
            <span className="invitation-text">COMPRA, CONCURSA Y GANA</span>
          </div>
          <Button variant="outline-info"> CONOCE COMO</Button>
        </div>
        <section className="participate">PARTICIPA</section>
      </div>
    </div>
  );
};

export default Register;
