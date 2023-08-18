import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import FlagDta from "../../assets/Data/Country"

const Flag = () => {

  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  // Function to handle selecting a country
  const handleSelect = (countryName) => {
    setSelected(countryName);
    setIsOpen(false); // Close the dropdown
  
  };

  // Function to toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelected(""); // Clear the selected value
  
  };
  
  return (
    <div className="custom-dropdown">
    <div className="dropdown-header" onClick={toggleDropdown}>
      {selected
        ? selected.length > 25
          ? selected.substring(0, 25) + "..."
          : selected
        : "Gold"}
      <div>
        <BiChevronDown size={25} className={isOpen ? "rotate-180" : ""} />
      </div>
    </div>

    

    {isOpen && (
      <ul className="flag-list">

        {FlagDta
          .map((data) => (
            <li key={data.id} onClick={() => handleSelect(data.name)}>
              {data.name}
            </li>
          ))}
      </ul>
    )}
  </div>
  );
}

export default Flag;
