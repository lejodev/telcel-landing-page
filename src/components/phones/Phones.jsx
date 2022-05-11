import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/phones/_phones.scss";

const Phones = () => {
  return (
    <section className="phones-section">
      <div className="phones-image-container">
        <div className="phones-image"></div>
      </div>
      <div className="phones-info">
        <div className="title">
          <span>COMPRA TU </span>
          <span>MÓVIL</span>
        </div>
        <div className="phone-brands"></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
          ducimus excepturi? Expedita iste optio tempora natus maiores omnis
          fuga nisi totam, dicta magni itaque asperiores architecto dolores
          dolor? Modi, ea.
        </p>
        <Button variant="primary">Cómpralo Ahora</Button>
      </div>
    </section>
  );
};

export default Phones;
