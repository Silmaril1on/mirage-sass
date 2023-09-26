import React from "react";
import "./deluxe.scss";
import "../../styles/index.scss";
import video from "../../assets/deluxe.mp4";
import shield from "../../assets/shield.png";

function Deluxe() {
  return (
    <>
      <section className="deluxe">
        <div className="display-f fd-c jc-c a-items-c">
          <h1 className="text-t-up font-w-900 font-s-xl p-2 m-3 t-align-c">
            discover the deluxe edition
          </h1>
          <p className=" m-2 pl-4 pr-4 t-align-c font-f-q font-w-400">
            Get the most out of your Assassin adventure with the Deluxe Edition
            and unlock additional content. The Prince of Persia-inspired Deluxe
            Pack contains, among others, an outfit, a weapons set and a mount
            skin.
          </p>
          <button className="primary-button">pre-order</button>
        </div>

        <div className="deluxe-video mt-4 mb-4">
          <video autoPlay={true} loop={true} muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
      <DeluxeBonus />
    </>
  );
}

function DeluxeBonus() {
  return (
    <div className="deluxe-bonus">
      <div>
        <img className="p-3" src={shield} alt="shield" />
        <h1 className="font-f-n text-t-up pb-2 font-w-900">pre-order bonus</h1>
        <h3 className="font-f-q t-align-c p-4  font-w-400">
          Play the game on Day 1 and unlock a bonus quest, The Forty Thieves.
        </h3>
        <button className="primary-button">pre-order</button>
      </div>
    </div>
  );
}

export default Deluxe;
