import React from "react";
import "./Footer.css";

//import { SocialIcon } from "react-social-icons";

const Footer = () => {
  let today = new Date();
  let currentYear = today.getFullYear();

  return (
    <div>
      <div className="social-media-parent">
        <div className="facebook-icon">
          {/* <SocialIcon
            url="https://www.facebook.com/tallgrassland"
            target="_blank"
          /> */}
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-legal-one">{`Tall Grassland, LLC`}</div>
        <div className="footer-legal-two">All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
