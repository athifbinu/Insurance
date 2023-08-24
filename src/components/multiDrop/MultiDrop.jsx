
import React, { useState } from 'react';
import Select from "react-select";
import FlagData from "../../assets/Data/Country";
import "./MultiDrop.css"

export default function MultiDrop({ onSelect }) {
  const [value, setValue] = useState([]);

  const handleChange = selectedOptions => {
    setValue(selectedOptions);
    onSelect(selectedOptions);
  };

  return (
    <div className='multiDrop'>
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
