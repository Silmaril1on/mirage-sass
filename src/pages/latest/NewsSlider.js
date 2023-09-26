import React, { useState } from "react";
import "./latest.scss";
import "../../styles/index.scss";
import latest from "../../db/latestNews";
import { motion, AnimatePresence } from "framer-motion";
const photo =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 10.5L1.5 12l5 5L1 22.5V18l1.5-1.5M6.5 7L4 9.5 1 6V1.5L6.5 7zM7.767 15.5l3.733-3.733L8.233 8.5 4.5 12.233m4-.466l-2 2' stroke='%23E1E0E0'/%3E%3C/svg%3E";

const childVar = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease",
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        type: "ease",
      },
    };
  },
};

function NewsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(1);
    if (index === latest.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const right = () => {
    setDirection(-1);
    if (index === latest.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <>
      <div className="latest-slider mobile-size fd-c">
        <div className="wrapper">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              variants={childVar}
              initial="hidden"
              animate="visible"
              key={latest[index].image}
              exit="exit"
              custom={direction}
              className="latest-card"
            >
              <img src={latest[index].image} alt="latest" />
              <h1 className="font-f-n text-t-up font-s-md p-4 t-align-c lh-sm">
                {latest[index].name}
              </h1>
              <h5 className="font-f-q text-t-up">{latest[index].date}</h5>
            </motion.div>
          </AnimatePresence>
          <div className="button-container">
            <button onClick={right} className="toggle-button">
              <img src={photo} alt="arrow" />
            </button>
            <button onClick={left} className="toggle-button">
              <img src={photo} alt="arrow" />
            </button>
          </div>
        </div>
        <h1 className="color-cream t-align-c font-s-md font-f-q">
          {index + 1}/3
        </h1>
      </div>
      <DesktopNews />
      <h1 className="bottom-header desktop-size font-f-q color-l-grey pb-4 t-align-c font-w-400 font-s-md ls-sm">
        Get the full Assassin experience with exclusive physical items and
        digital bonus content!
      </h1>
      <button className="primary-button">all news</button>
    </>
  );
}

function DesktopNews() {
  return (
    <div className="desktop-size z-3 pt-4 pb-4 fc-c jc-sa">
      {latest.map((item) => {
        return (
          <div key={item.id} className="desktop-card">
            <img src={item.image} alt="news" />
            <h1 className="font-f-n text-t-up font-s-lg t-align-c p-3">
              {item.name}
            </h1>
            <h4 className="font-f-q text-t-up">{item.date}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default NewsSlider;
