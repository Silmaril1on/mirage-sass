import React, { useState } from "react";
import "./characters.scss";
import "../../styles/index.scss";
import { motion, AnimatePresence } from "framer-motion";
import creeds from "../../db/charactersData";
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

function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(1);
    if (index === creeds.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const right = () => {
    setDirection(-1);
    if (index === creeds.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <>
      <div className="slider-containier mobile-size fd-c jc-c a-items-c">
        <div className="wrapper">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              variants={childVar}
              initial="hidden"
              animate="visible"
              key={creeds[index].image}
              exit="exit"
              custom={direction}
              className="slider-wrapper"
            >
              <img src={creeds[index].image} alt="creed-hero" />
              <div className="slider-info">
                <h1 className="font-f-q text-t-up ls-sm p-1">
                  {creeds[index].name}
                </h1>
                <p className="pt-3 p-3 t-align-c font-f-q">
                  {creeds[index].info}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="slider-button-container">
            <button onClick={right}>
              <img src={photo} alt="right" />
            </button>
            <button onClick={left}>
              <img src={photo} alt="left" />
            </button>
          </div>
        </div>
        <h3 className="color-cream font-f-q">{index + 1}/4</h3>
      </div>
      <DesktopeCharacters />
    </>
  );
}

function DesktopeCharacters() {
  return (
    <section className="desktop-size fd-r jc-sa">
      {creeds.map((item) => {
        return (
          <div className="desktop-item" key={item.id}>
            <img src={item.image} alt="creed" />
            <div>
              <h1 className="font-f-q font-s-lg text-t-up ls-sm p-1">
                {item.name}
              </h1>
              <p className="font-f-q p-4 t-align-c">{item.info}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Slider;
