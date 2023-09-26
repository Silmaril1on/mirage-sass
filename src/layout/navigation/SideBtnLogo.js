import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import acLogo from "../../assets/acm-logo-mobile.webp";
import SideBar from "./SideBar";
import PreOrder from "./PreOrder";

function SideBtnLogo() {
  const [side, setSide] = useState(false);

  const openBar = () => {
    setSide(!side);
  };

  return (
    <div className="mobile-size jc-sb">
      <div className="logo-container pl-2">
        <div>
          {side ? (
            <AiOutlineClose onClick={openBar} />
          ) : (
            <AiOutlineMenu onClick={openBar} />
          )}
        </div>
        <div>
          <img src={acLogo} alt="creed" />
        </div>
        {side && <SideBar />}
      </div>
      <PreOrder />
    </div>
  );
}

export default SideBtnLogo;
