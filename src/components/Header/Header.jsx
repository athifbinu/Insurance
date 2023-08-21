import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/empty (1).png";
import india from "../../assets/india.png";
import { BiComment } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { MdArrowForwardIos, MdArrowDropDown } from "react-icons/md";
import Flag from "../../assets/Data/Language.js";
import { AiFillBook } from "react-icons/ai";
import { PiNumberZeroFill } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { BsFillFileLockFill } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [show, setshow] = useState(false);
  const [showProfile, setshowProfile] = useState(false);

  const handleselct = (selectFlag) => {
    setSelect(selectFlag);
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const togleShowTask = () => {
    setshow(!show);
  };

  const handleProfile = () => {
    setshowProfile(!showProfile);
  };

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
        <span onClick={toggleOpen}>
          <img src={select || india} alt="" />
        </span>
        {open && (
          <ul className="languge-list">
            {Flag.map((data) => (
              <li key={data.id} onClick={() => handleselct(data.Flag)}>
                <img src={data.Flag} alt="" />
                {data.name}
              </li>
            ))}
          </ul>
        )}
        <MdArrowDropDown />

        <hr style={{ height: "18px" }} />

        <div className="message-icon" onClick={togleShowTask}>
          <BiComment size={27} />
          <span class="badge">5</span>
        </div>

        {show && (
          <div className="show-task">
            <div className="task-section flax">
              <div className="flex">
                <AiFillBook size={20} />
                <p>show Tasks</p>
              </div>

              <div>
                <PiNumberZeroFill size={20} />
              </div>
            </div>
          </div>
        )}

        <div onClick={handleProfile}>
          <GoPerson size={27} />
        </div>

        {showProfile && (
          <div className="profile-drop">
            <ul>
              <span>
                <BsFillPersonFill />
                <li>EXCURSIONSPORTAL</li>
              </span>

              <span>
                <TfiWrite />
                <li>API Documentation</li>
              </span>

              <span>
                <BsFillFileLockFill />
                <li>Logout</li>
              </span>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
