import React from "react";

const PermissionForm = (item) => {
  console.log("item", item);
  return (
    <div>
      <div className=" grid grid-cols-5  py-4 uppercase font-bold place-content-center place-items-center text-[#1E293B] bg-[#F9FAFB]">
        <div className="flex items-center">
          <h1 className="mr-2">{'data'}</h1>
          <input type="checkbox" className="" name="allSelect" />
        </div>
        {item?.map(( index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionForm;
