import React, { useState } from "react";
import links from "../../db/navlinksData";
import PreOrder from "./PreOrder";
import desktopLogo from "../../assets/desktop.avif";
import { motion } from "framer-motion";
const photo =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 10.5L1.5 12l5 5L1 22.5V18l1.5-1.5M6.5 7L4 9.5 1 6V1.5L6.5 7zM7.767 15.5l3.733-3.733L8.233 8.5 4.5 12.233m4-.466l-2 2' stroke='%23E1E0E0'/%3E%3C/svg%3E";

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function NavLinks() {
  const [subMenu, setSubMenu] = useState(null);

  const dropDownMenu = (id) => {
    if (id === subMenu) {
      setSubMenu(null);
    }
    setSubMenu(id);
  };

  return (
    <div className="desktop-size jc-sa">
      <div>
        <img src={desktopLogo} alt="desktop" />
      </div>
      <div className="display-i-f jc-c a-items-c">
        {links.map((link, index) => {
          return (
            <ul className="display-f m-1" key={index}>
              <h3
                onMouseEnter={() => dropDownMenu(link.id)}
                onMouseLeave={() => setSubMenu(null)}
                className="nav-links display-f a-items-c jc-c"
              >
                {link.name}
                {link.image ? <img src={link.image} alt="arrow" /> : ""}
                {subMenu === link.id && <SubLinks data={link.drop} />}
              </h3>
            </ul>
          );
        })}
      </div>
      <div className="display-i-f jc-c a-items-c">
        <h3 className="font-f-n text-t-cap font-w-700 font-s-lg">
          collector's case <img src={photo} alt="" />
        </h3>
      </div>
      <PreOrder />
    </div>
  );
}

function SubLinks({ data }) {
  return (
    <div>
      {data ? (
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          className="submenu"
        >
          {data.map((sublink, index) => {
            return (
              <h1
                className="font-s-md font-f-q font-w-400 t-align-c m-1"
                key={index}
              >
                {sublink.name}
              </h1>
            );
          })}
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavLinks;
