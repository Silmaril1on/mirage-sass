import React from "react";
import "./latest.scss";
import "../../styles/index.scss";
import NewsSlider from "./NewsSlider";
import smoke from "../../assets/smoke.webm";

function LatestNews() {
  return (
    <div className="latest-container display-f fd-c a-items-c">
      <h1 className="font-f-n res-font text-t-up pb-1 pt-4 color-cream">
        latest news
      </h1>
      <NewsSlider />
      <div className="video-player">
        <video autoPlay={true} loop={true} muted>
          <source src={smoke} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default LatestNews;
