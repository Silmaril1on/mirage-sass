import React from "react";
import "./footer.scss";
import "../../styles/index.scss";
import { BiWorld } from "react-icons/bi";
import logo from "../../assets/desktop.avif";
import footerData from "../../db/footerData";
import pegi from "../../assets/pegi18.avif";
const arrow =
  "data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 10.5L1.5 12l5 5L1 22.5V18l1.5-1.5M6.5 7L4 9.5 1 6V1.5L6.5 7zM7.767 15.5l3.733-3.733L8.233 8.5 4.5 12.233m4-.466l-2 2' stroke='%23E1E0E0'/%3E%3C/svg%3E";

function Mirage() {
  return (
    <div className="mirage-container">
      <div className="language-container pt-4">
        <BiWorld />
        <h4 className="font-f-q text-t-up">language</h4>
        <img src={arrow} alt="arrow" />
      </div>
      <img className="m-4" src={logo} alt="creed" />
      <section className="display-f fd-c">
        {footerData.map((item) => {
          return (
            <div className="p-3" key={item.id}>
              <h3 className="font-f-n p-2 color-l-grey text-t-up font-s-md t-align-c font-w-300">
                {item.name}
              </h3>
              {item.child.map((subItem, index) => {
                return (
                  <h1
                    className="color-white m-2 t-aling-c text-t-up font-f-q font-w-500 t-align-c"
                    key={index}
                  >
                    {subItem}
                  </h1>
                );
              })}
            </div>
          );
        })}
      </section>
      <img className="p-3" src={pegi} alt="pegi18" />
      <p className="color-cream font-f-q p-4 t-align-c ml-4 mr-4">
        © 2022 Ubisoft Entertainment. All Rights Reserved. Assassin's Creed,
        Ubisoft, and the Ubisoft logo are registered or unregistered trademarks
        of Ubisoft Entertainment in the US and/or other countries.
      </p>
    </div>
  );
}

export default Mirage;
