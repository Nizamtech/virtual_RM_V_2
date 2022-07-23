import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// import "wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
// import "react-calendar/dist/Calendar.css";
import "./styles.css";

const RangeCalender = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className=" border-none">
      <DateRangePicker
        onChange={onChange}
        value={value}
        className=" outline-none h-9 bg-white  px-2 rounded-md  text-gray-400 border border-gray-300"
      />
    </div>
  );
};

export default RangeCalender;
