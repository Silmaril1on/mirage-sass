import React, { useState } from "react";
import links from "../../db/navlinksData";
import PreOrder from "./PreOrder";
import { motion } from "framer-motion";

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

const slide = {
  hidden: {
    y: -10,
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
    },
  },
};

function SideBar() {
  const [asideMenu, setAsidemenu] = useState(null);

  const dropAside = (id) => {
    if (id === asideMenu) {
      setAsidemenu(null);
      return;
    }
    setAsidemenu(id);
  };

  return (
    <motion.aside
      variants={fade}
      initial="hidden"
      animate="visible"
      className="aside-menu"
    >
      <div>
        {links.map((link, index) => {
          return (
            <ul key={index}>
              <h3
                onClick={() => dropAside(link.id)}
                className="font-f-q font-w-400 text-t-up p-4 color-cream bb-xs cursor-p"
              >
                {link.name}
                {link.image ? <img src={link.image} alt="arrow" /> : ""}
              </h3>
              {asideMenu === link.id && <AsideLinks data={link.drop} />}
            </ul>
          );
        })}
      </div>
      <div>
        <h3 className="p-3 font-f-n text-t-cap t-align-c ">collector's case</h3>
        <PreOrder />
        <h1 className=" font-s-lg font-f-q text-t-up">Ubisoft LTD</h1>
      </div>
    </motion.aside>
  );
}

function AsideLinks({ data }) {
  return (
    <motion.div
      variants={slide}
      initial="hidden"
      animate="visible"
      className="aside"
    >
      {data.map((sublink, index) => {
        return (
          <h1
            className="font-s-md font-f-q font-w-400 t-align-c cursor-p m-1 p-2 text-t-up bb-xs"
            key={index}
          >
            {sublink.name}
          </h1>
        );
      })}
    </motion.div>
  );
}

export default SideBar;
