import React, { useState } from "react";

import goldData from "../../assets/Data/Gold";

import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import "./Gold.css";

const Gold = () => {

  const [selected, setSelected] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelect = (countryName) => {
    setSelected(countryName);
    setInputValue("");
  };


  const [isOpen,setIsopen]=useState(false)

  const GoldDropDown=()=>{
    setIsopen(!isOpen)
  }

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={GoldDropDown}>
        {selected
          ? selected.length > 25
            ? selected.substring(0, 25) + "..."
            : selected
          : "Gold"}
        <div>
          <IoIosClose style={{ color: "red" }} size={25} />
          <BiChevronDown size={25}/>
        </div>
      </div>



    {isOpen &&(
      <ul className="options-list" style={{position:"absolute"}}>
        <div className="search-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            className="input"
          />
        </div>

        {goldData.map((country) => (
          <li
            key={country.name}
            className={`option ${
              country.name.toLowerCase() === selected.toLowerCase()
                ? "selected"
                : ""
            } ${
              country.name.toLowerCase().startsWith(inputValue)
                ? "visible"
                : "hidden"
            }`}
            onClick={() => handleSelect(country.name)}
          >
            {country.name}
          </li>
        ))}
      </ul>
    )
    }

    </div>
  );
};

export default Gold;
