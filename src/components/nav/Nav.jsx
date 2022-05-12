import React from "react";
import "../../styles/nav/_nav.scss";
import image2 from "../../assets/images/image2/Image 2.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="menu-nav">
        <li className="menu-item">
          <a href="#register" className="link">
            Cómo Participar
          </a>
        </li>
        <li className="menu-item">
          <a href="#phones" className="link">
            Móviles
          </a>
        </li>
        <li className="menu-item">
          <a href="#ranking" className="link">
            Ranking
          </a>
        </li>
      </ul>
      <div className="logo">
        <img src={image2} alt="LOGO" />
      </div>
      <Button variant="info">Comienza Ahora</Button>
    </nav>
  );
};

export default Nav;
