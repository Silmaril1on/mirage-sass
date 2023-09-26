import React from "react";
import "./navigation.scss";
import "../../styles/index.scss";
import SideBtnLogo from "./SideBtnLogo";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <div className="container pt-2 pb-2">
      <SideBtnLogo />
      <NavLinks />
    </div>
  );
}

export default NavBar;
