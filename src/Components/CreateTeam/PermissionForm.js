import React from "react";

const PermissionForm = (item) => {
  console.log("item", item);
  return (
    <div>
      {/* <div className=" grid grid-cols-5 mt-2 p-3 uppercase font-bold place-content-center place-items-center text-white bg-[#1E293B]">
        <h1>Module</h1>
        <h1>View</h1>
        <h1>Add</h1>
        <h1>Change</h1>
        <h1>Delete</h1>
      </div> */}

      <div className=" grid grid-cols-5  py-4 uppercase font-bold place-content-center place-items-center text-[#1E293B] bg-[#F9FAFB]">
        <div className="flex items-center">
          <h1 className="mr-2">{"data"}</h1>
          <input
            type="checkbox"
            className=""
            name="allSelect"
            // checked={!users.some((user) => user?.isChecked !== true)}
            // onChange={handleChange}
          />
        </div>
        {item?.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              // name={user.name}
              // checked={user?.isChecked || false}
              // onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionForm;
