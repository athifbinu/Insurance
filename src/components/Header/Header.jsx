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
//close
import {FaTimes} from "react-icons/fa"
//open
import {AiOutlineMenu} from "react-icons/ai"

import LeftHeader from "./../LeftHeader/LeftHeder"
 
const Header = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [show, setshow] = useState(false);
  const [showProfile, setshowProfile] = useState(false);

  const [openNave,setOpenNav]=useState(false)

  const OpencloseNav=()=>{
    setOpenNav(!openNave)
  }




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

        <p className="d-none">HOME</p>
        <MdArrowForwardIos  className="d-none"/>
        <p className="d-none">CONTRACT</p>
        <MdArrowForwardIos className="d-none" />
        <p className="d-none">TRAVEL CERTIFICATE</p>
        <MdArrowForwardIos className="d-none"/>
        <p className="d-none">ADD TRAVEL CERTIFICATE</p>
      </div>

      <div className="last-section flex">
         <h3 className="d-none">RTK</h3>
        <span className="d-none" onClick={toggleOpen}>
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
        <MdArrowDropDown className="d-none" />
        



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



        <div className="d-none" onClick={handleProfile}>
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
                <li>Logout</li>AiOutlineMenu
              </span>
            </ul>
          </div>
        )}

        <div className="mobile-menu">
                <AiOutlineMenu onClick={OpencloseNav} size={25} style={{cursor:"pointer"}}/>
          
                <FaTimes onClick={OpencloseNav} size={25} style={{cursor:"pointer"}}/>

        </div>
      </div>
    </header>
  );
};

export default Header;
