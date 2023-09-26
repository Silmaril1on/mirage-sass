import React from "react";
import "./about.scss";
import "../../styles/index.scss";
import video from "../../assets/lights.webm";

function PromoContent() {
  return (
    <div className="promo-content display-f pos-r fd-c jc-c p-2">
      <video autoPlay={true} loop={true} muted>
        <source src={video} type="video/webm" />
      </video>
      <div className="display-f fd-c jc-c m-2 a-items-c pt-3">
        <h1 className="res-font mt-5 font-f-n text-t-up font-w-800 p-3 t-align-c">
          about the game
        </h1>
        <p className="t-align-c font-f-q p-2 font-s-md lh-md">
          In Assassin's Creed Mirage, you are Basim, a cunning street thief with
          nightmarish visions seeking answers and justice. <br />
          <br /> Join an ancient organisation and come to understand a new creed
          - one that will change Basim's fate in ways he never could have
          imagined.
        </p>
      </div>
    </div>
  );
}

export default PromoContent;
