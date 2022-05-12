import React from "react";
import "../../styles/footer/_footer.scss";
import logo from "../../assets/images/image2/Image 2.png";
import logo_instagram from "../../assets/images/Group 31.svg";
import logo_facebook from "../../assets/images/Path 3.svg";
import logo_youtube from "../../assets/images/Path 4.svg";

const Foooter = () => {
  return (
    <div className="footer" id="footer">
      <img src={logo} alt="" className="logo" />
      <div className="icons">
        <img src={logo_instagram} alt="" className="logo" />
        <img src={logo_facebook} alt="" className="logo" />
        <img src={logo_youtube} alt="" className="logo" />
      </div>
      <div className="text">Términos y Condiciones</div>
    </div>
  );
};

export default Foooter;
