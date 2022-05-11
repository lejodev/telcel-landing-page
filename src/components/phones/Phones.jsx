import React from "react";
import Button from "react-bootstrap/Button";
import xiaomi_icon from "../../assets/images/image6/Image 6.png";
import realme_icon from "../../assets/images/image7/Image 7.png";
import oppo_icon from "../../assets/images/image8/Image 8.png";
import honor_icon from "../../assets/images/image9/Image 9.png";

import "../../styles/phones/_phones.scss";

const Phones = () => {
  return (
    <section className="phones-section">
      <div className="phones-image-container">
        <div className="phones-image"></div>
      </div>
      <div className="phones-info">
        <div className="title">
          <span className="purple-title">COMPRA TU </span>
          <span className="dark-title">MÓVIL</span>
        </div>
        <div className="phone-brands">
          <div className="brands-icons">
            <img
              src={xiaomi_icon}
              alt="Xiaomi icon"
              className="icon redmi-icon-container"
            />
            <img
              src={realme_icon}
              alt="Realme icon"
              className="icon realme-icon-container"
            />
            <img
              src={oppo_icon}
              alt="Oppo icon"
              className="icon oppo-icon-container"
            />
            <img
              src={honor_icon}
              alt="Honor icon"
              className="icon honor-icon-container"
            />
          </div>
        </div>
        <p className="phones-info-text">
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
