import React from "react";
import "./footer.scss";
import "../../styles/index.scss";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiLogoTwitch, BiLogoFacebook, BiLogoTiktok } from "react-icons/bi";

function Social() {
  return (
    <div className="socials">
      <div className="">
        <AiOutlineTwitter />
        <BiLogoFacebook />
        <BiLogoTwitch />
        <AiFillYoutube />
        <AiOutlineInstagram />
        <BiLogoTiktok />
      </div>
    </div>
  );
}

export default Social;
