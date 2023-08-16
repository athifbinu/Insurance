import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/empty (1).png";
import india from "../../assets/india.png";
import { BiComment } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { MdArrowForwardIos, MdArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex">
    <div className="logo-section flex">
      <img src={logo} alt="" />

      <p>HOME</p>
      <MdArrowForwardIos />
      <p>CONTRACT</p>
      <MdArrowForwardIos />
      <p>TRAVEL CERTIFICATE</p>
      <MdArrowForwardIos />
      <p>ADD TRAVEL CERTIFICATE</p>
    </div>

    <div className="last-section flex">
      <h3>RTK</h3>
      <img src={india} alt="" />
      <MdArrowDropDown />
      <hr style={{ height: "18px" }} />

      <div className="message-icon">
        <BiComment size={27} />
        <span class="badge">5</span>
      </div>
      <GoPerson size={27} />
    </div>
  </header>
  );
};

export default Header;
