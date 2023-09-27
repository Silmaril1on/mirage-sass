import React from "react";
import "./footer.scss";
import "../../styles/index.scss";
import Social from "./Social";
import Ubisoft from "./Ubisoft";
import Mirage from "./Mirage";

function Footer() {
  return (
    <div className="footer-container">
      <Social />
      <div className="wrapper">
        <Mirage />
        <Ubisoft />
      </div>
    </div>
  );
}

export default Footer;
