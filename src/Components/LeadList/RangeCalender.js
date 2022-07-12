import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import "wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
// import "react-calendar/dist/Calendar.css";
const RangeCalender = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  console.log(value);
  return (
    <div className=" border-none">
      <DateRangePicker
        onChange={onChange}
        value={value}
        className=" calender outline-none h-9 bg-white  px-2 rounded-md border-none text-gray-400"
      />
    </div>
  );
};

export default RangeCalender;
