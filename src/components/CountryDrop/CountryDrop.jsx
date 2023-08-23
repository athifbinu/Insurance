import React, { useState } from "react";
import CountryData from "../../assets/Data/Country";
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import "./Country.css";

const Gold = () => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(null);

  // Function to handle selecting a country
  const handleSelect = (countryName, index) => {
    setSelected(countryName);
    setSelectedIndex(index);
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
          : "Uited Arab Emirates"}
        <div>
          <IoIosClose size={25}
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              setSelected("");
              setSelectedIndex(null);
            }}
          />
          <BiChevronDown size={25} className={isOpen ? "rotate-180" : ""} />
        </div>
      </div>

      {isOpen && (
        <ul className="options-list" style={{ position: "absolute" }}>
          <div className="search-input">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className="input"
            />
          </div>

          {CountryData.filter((data) =>
            data.name.toLowerCase().includes(query)
          ).map((data, index) => (
            <li key={data.id} onClick={() => handleSelect(data.name, index)}>
              {data.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gold;
