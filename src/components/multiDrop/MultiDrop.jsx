import React, { useState } from 'react';
import Flagdata from "../../assets/Data/Country"

const MultiDrop = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const filteredOptions = Flagdata.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleInputChange = event => {
      setSearchTerm(event.target.value);
    };
  
    const handleOptionSelect = event => {
      const value = event.target.value;
      setSelectedOptions(prevSelected => {
        if (prevSelected.includes(value)) {
          return prevSelected.filter(item => item !== value);
        } else {
          return [...prevSelected, value];
        }
      });
    };
  return (
    <div>
      
    </div>
  );
}

export default MultiDrop;
