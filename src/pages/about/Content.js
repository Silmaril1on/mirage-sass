import React from "react";
import "../../styles/index.scss";
import "./about.scss";
import gameContent from "../../db/contentData";

function Content() {
  return (
    <section className="content-section m-1 mt-5">
      {gameContent.map((item) => {
        return (
          <div
            className="content-card display-f fd-c jc-c a-items-c"
            key={item.id}
          >
            <div className="image-div">
              <img className="" src={item.image} alt="creed-ac" />
            </div>
            <div className="content-div display-f fd-c jc-c a-items-c t-align-c">
              <div>
                <img src={item.preImage} alt="animal" />
              </div>
              <h1 className="">{item.title}</h1>
              <p className="p-3 lh-lm font-f-q t-align-c lh-sm">{item.desc}</p>
              <h3 className="font-f-n text-t-cap cursor-p">{item.link}</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Content;
