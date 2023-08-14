import React, { useState } from 'react';
import "./Header.css"
import logo from "../../assets/empty (1).png"
import india from "../../assets/india.png"
import {BiComment} from "react-icons/bi"
import {GoPerson} from "react-icons/go"
const Header = () => {



  return (
    <header className='flex'>
      <div className="logo-section flex">
        <img src={logo} alt="" />
        <p>HOME</p>
        <p>CONTRACT</p>
        <p>TRAVEL CERTIFICATE</p>

      </div>


      <div className="last-section flex">
          <h3>RTK</h3>
          <img src={india} alt="" />

          <BiComment size={18}/>
          <GoPerson size={18}/>
      </div>


    </header>
  );
}

export default Header;
