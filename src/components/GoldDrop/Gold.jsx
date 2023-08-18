import React, { useState } from "react";
import goldData from "../../assets/Data/Gold";
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import "./Gold.css";

const Gold = () => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Function to handle selecting a country
  const handleSelect = (countryName) => {
    setSelected(countryName);
    setIsOpen(false); // Close the dropdown
    setQuery(""); // Clear the search query
  };

  // Function to toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelected(""); // Clear the selected value
    setQuery(""); // Clear the search query
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
          <IoIosClose style={{ color: "red" }} size={25} />
          <BiChevronDown size={25} className={isOpen ? "rotate-180" : ""} />
        </div>
      </div>

      

      {isOpen && (
        <ul className="options-liste">
          <div className="search-input">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className="input"
            />
          </div>

          {goldData
            .filter((data) => data.name.toLowerCase().includes(query))
            .map((data) => (
              <li key={data.id} onClick={() => handleSelect(data.name)}>
                {data.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Gold;
