import React from "react";
import "../../styles/nav/_nav.scss";
import image2 from "../../assets/images/image2/Image 2.png";
import Button from "react-bootstrap/Button";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="menu-nav">
        <li className="menu-item">Cómo Participar</li>
        <li className="menu-item">Móviles</li>
        <li className="menu-item">Ranking</li>
      </ul>
      <div className="logo">
        <img src={image2} alt="LOGO" />
      </div>
      <Button variant="info">Comienza Ahora</Button>
    </nav>
  );
};

export default Nav;
