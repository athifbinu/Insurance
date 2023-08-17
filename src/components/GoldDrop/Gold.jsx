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

  const [query,setQuery]=useState("")

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
             onChange={(e)=>setQuery(e.target.value)}
            className="input"
          />
        </div>

         {
          goldData.filter((data)=>data.name.toLowerCase().includes(query))
          .map((data)=>(
             <li key={data.id}>
               {data.name}
             </li>
          ))
         }
      </ul>
    )
    }

    </div>
  );
};

export default Gold;
