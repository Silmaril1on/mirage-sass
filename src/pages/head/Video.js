import React from "react";
import "../../styles/index.scss";
import "./head.scss";
import trailer from "../../assets/acvideo.mp4";
const photo =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 10.5L1.5 12l5 5L1 22.5V18l1.5-1.5M6.5 7L4 9.5 1 6V1.5L6.5 7zM7.767 15.5l3.733-3.733L8.233 8.5 4.5 12.233m4-.466l-2 2' stroke='%23E1E0E0'/%3E%3C/svg%3E";

function Video() {
  return (
    <section className="display-f a-items-c fd-c jc-fe">
      <div className="video-container mb-5 display-f jc-c a-items-c">
        <div className="video-component">
          <video autoPlay={true} loop={true} muted>
            <source src={trailer} type="video/mp4" />
          </video>
        </div>
        <button className="primary-button">watch trailer</button>
      </div>
      <div className="ml-4 mr-4 p-3 pb-5">
        <p className="color-white font-f-q p-3 t-align-c ls-xs">
          Available October 5, 2023 on Xbox Series X|S, Xbox One, PlayStation®5,
          PlayStation®4, EPIC, PC, and Amazon Luna.
        </p>
        <h5 className="color-l-grey display-f jc-c a-items-c font-f-n t-align-c font-s-md pt-3">
          Watch the World Premier Trailer
          <img className="pl-2" src={photo} alt="arrow" />
        </h5>
      </div>
    </section>
  );
}

export default Video;
