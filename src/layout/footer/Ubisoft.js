import React from "react";
import "../../styles/index.scss";
import ubisoft from "../../assets/ubisoft.webp";

function Ubisoft() {
  return (
    <div className="ubisoft-container">
      <img className="p-4" src={ubisoft} alt="ubisoft" />
      <h1>store</h1>
      <h1>ubisoft connect</h1>
      <h1>company</h1>
      <h1>news</h1>
      <h1>support</h1>
      <br />
      <br />
      <br />
      <h2>privacy</h2>
      <h2>terms of use</h2>
      <h2>legal info</h2>
      <h2>set coockies</h2>
      <br />
      <br />
      <p className="p-4 m-4 color-white">all right's reserved</p>
    </div>
  );
}

export default Ubisoft;
