import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/register/_register.scss";

const Register = () => {
  return (
    <div>
      <section className="participate" id="register">
        <div className="participation-details-title">
          <span className="blue-title">CONOCE COMO </span>
          <span className="white-title">PARTICIPAR</span>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            perferendis, sint optio, porro expedita deserunt eligendi ipsum
            quaerat magni, cupiditate nemo id quia corporis alias dolor atque
            voluptates culpa reprehenderit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi
            fugiat ad, commodi eius libero recusandae odio quaerat, cumque modi
            veniam blanditiis iste facilis dolorum laboriosam itaque
            necessitatibus quos dolorem.
          </p>
        </div>
        <Button variant="info">Inscríbete</Button>
      </section>
    </div>
  );
};

export default Register;
