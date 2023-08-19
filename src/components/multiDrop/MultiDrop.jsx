// import React, { useState } from 'react';
// import "./MultiDrop.css";


// const MultiDrop = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [showDropdown,setShowDropdown]=useState()

//   const filteredOptions = FlagData.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleInputChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   const handleOptionSelect = itemName => {
//     if (selectedOptions.includes(itemName)) {
//       setSelectedOptions(prevSelected => prevSelected.filter(item => item !== itemName));
//     } else {
//       setSelectedOptions(prevSelected => [...prevSelected, itemName]);
//     }
//   };

//   const clearSelectedOptions = () => {
//     setSelectedOptions([]);
//   };

//   return (
//     <div className="multiselect-container">
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Search names..."
//           value={searchTerm}
//           onChange={handleInputChange}
//           onFocus={toggleDropdown}
//           onBlur={toggleDropdown}
//         />
//         {showDropdown && (
//           <div className="dropdown">
//             {filteredOptions.map((item, index) => (
//               <div
//                 key={index}
//                 className={`option ${selectedOptions.includes(item.name) ? 'selected' : ''}`}
//                 onClick={() => handleOptionSelect(item.name)}
//               >
//                 {item.name}
//               </div>
//             ))}
//           </div>
//         )}
//         {selectedOptions.length > 0 && (
//           <button className="clear-button" onClick={clearSelectedOptions}>
//             <span className="close-icon">✖</span>
//           </button>
//         )}
//       </div>
//       <div className="selected-options">
//         {selectedOptions.map((option, index) => (
//           <div key={index} className="selected-option">
//             {option}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MultiDrop;




import React, { useState } from 'react';
import Select from "react-select";
import FlagData from "../../assets/Data/Country";

export default function MultiDrop() {
  const [value, setValue] = useState([]);

  const handleChange = selectedOptions => {
    setValue(selectedOptions);
  };

  return (
    <div style={{ marginBottom:"16px", width: "100%" }}>
      <Select
        options={FlagData}
        value={value}
        onChange={handleChange}
        isMulti
        isSearchable
        noOptionsMessage={() => "No Message"}
        getOptionLabel={option => option.name} // This maps the label to the name property
        getOptionValue={option => option.id}   // This maps the selected value to the id property
      />
    </div>
  );
}
