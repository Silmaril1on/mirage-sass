import React from "react";
import "./characters.scss";
import "../../styles/index.scss";
import Slider from "./Slider";

function Characters() {
  return (
    <section className="characters display-f fd-c pos-r jc-c a-items-c">
      <h1 className="font-f-n text-t-up p-5 m-2 res-font color-cream">
        characters
      </h1>
      <Slider />
    </section>
  );
}

export default Characters;
