import React from "react";
import "./about.scss";
import "../../styles/index.scss";
import PromoContent from "./PromoContent";
import Content from "./Content";
import Characters from "../characters/Characters.js";
import LatestNews from "../latest/LatestNews";

function About() {
  return (
    <main className="about-container">
      <PromoContent />
      <Content />
      <Characters />
      <LatestNews />
    </main>
  );
}

export default About;
