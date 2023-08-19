import React, { useState } from 'react';
import "./DateDrop.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const DateDrop = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="datepicker-container">
    <DatePicker
      id="datepicker"
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      showPopperArrow={false}
      calendarContainer={document.getElementById('datepicker')}
      popperPlacement="top-end"
      popperModifiers={{
        flip: {
          behavior: ['top'],
        },
        preventOverflow: {
          enabled: true,
          escapeWithReference: false,
          boundariesElement: 'viewport',
        },
      }}
    />
  </div>
  );
}

export default DateDrop;
