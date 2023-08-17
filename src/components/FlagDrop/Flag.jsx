import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import FlagImages from "../../assets/Data/Country"
import "./Flag.css"
const Flag = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleFlagSelect = (flag) => {
      setSelectedFlag(flag);
      setIsOpen(false);
    };
  return (
    <div className="flag-select-dropdown">
    <div className="input-container">
      <input
        type="text"
        placeholder="Select a flag"
        readOnly
        value={selectedFlag ? selectedFlag.name : ''}
      />
      <span className="dropdown-icon" onClick={toggleDropdown}>
        <MdArrowDropDown size={20} />
      </span>
    </div>
    {isOpen && (
      <ul className="flag-options">
        {FlagImages.map((flag, index) => (
          <li
            key={index}
            onClick={() => handleFlagSelect(flag)}
            className={`flag-option ${
              selectedFlag === flag ? 'selected' : ''
            }`}
          >
            <img src={flag.image} alt={flag.name} />
            {flag.name}
          </li>
        ))}
      </ul>
    )}
  </div>
  );
}

export default Flag;
