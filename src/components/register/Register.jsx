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
          <div className="player"></div>
        </div>
        <div className="invitation">
          <div className="invitation-title"></div>
          <span className="invitation-text">COMPRA, CONCURSA Y GANA</span>
          <Button variant="outline-info"> CONOCE COMO</Button>
        </div>
        <section className="participate">
          <div className="participation-details-title">
            <span>CONOCE COMO </span>
            <span>PARTICIPAR</span>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              perferendis, sint optio, porro expedita deserunt eligendi ipsum
              quaerat magni, cupiditate nemo id quia corporis alias dolor atque
              voluptates culpa reprehenderit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              sequi fugiat ad, commodi eius libero recusandae odio quaerat,
              cumque modi veniam blanditiis iste facilis dolorum laboriosam
              itaque necessitatibus quos dolorem.
            </p>
          </div>
          <Button variant="info">Inscríbete</Button>
        </section>
      </div>
    </div>
  );
};

export default Register;
