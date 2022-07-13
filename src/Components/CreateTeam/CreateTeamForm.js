import React, { useEffect, useState } from "react";
import axios from "axios";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";

const CreateTeamForm = () => {
  const [users, setUsers] = useState([]);
  const [permission, setPermission] = useState([]);
  const [team, setTeam] = useState([]);

  const [content_type, setContent_type] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setPermission([...permission, name]);
    } else {
      const restData = permission.filter((item) => item !== name);
      setPermission(restData);
    }
    if (name === "allSelect") {
      let tempUser = content_type.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = content_type.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
  // console.log(permission, content_type);
  useEffect(() => {
    const loadPermission = async () => {
      const content_type = await fetch(
        "http://localhost:8000/accounts/content_type/"
      );
      const rest = await content_type.json();
      setContent_type(rest);
    };

    loadPermission();
  }, []);

  const handleName = (e) => {
    setTeam(e.target.value);
  };

  const handleSubmitFile = async (event) => {
    event.preventDefault();
    const data = {
      name: team,
      permissions: permission,
    };
    axios
      .post("http://127.0.0.1:8000/api/team/", data)
      .then((response) => {
        if (response.status === 201) {
          SuccessAlert("Team Created", "success");
        }
      })
      .catch((error) => {
        SuccessAlert(error.message, "error");
      });
  };

  return (
    <div className=" h-screen overflow-scroll ">
      <form onSubmit={handleSubmitFile}>
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Team Name
          </h1>
          <input
            required
            className=" w-full h-12 ml-1 px-4 rounded-md"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            onChange={handleName}
          />
        </div>
        <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium mt-8">
          Permission
        </h1>
        <div className=" hidden md:grid grid-cols-5 place-items-center p-2 text-start  text-lg uppercase bg-black text-white ">
          <div>Model</div>
          <div>View</div>
          <div>Add</div>
          <div>Change</div>
          <div>Delete</div>
        </div>
        <div>
          {content_type &&
            content_type?.map((item) => (
              <div className=" grid grid-cols-1 gap-4 md:grid-cols-5 p-3 border  border-gray-200 my-1 ">
                <div className="">
                  <h1 className="text-sky-500 md:text-black  mx-2 text-lg uppercase">
                    {item?.model}{" "}
                  </h1>
                  {/* <input
                    type="checkbox"
                    checked={
                      !content_type.some((user) => user?.isChecked !== true)
                    }
                    onChange={handleChange}
                    name="allSelect"
                    id=""
                  /> */}
                </div>

                <div className=" grid  grid-cols-2   md:grid-cols-1 place-items-center">
                  <h1 className=" block md:hidden text-lg">View</h1>
                  <input
                    type="checkbox"
                    value={item?.permissions?.view}
                    name={item?.permissions?.view}
                    checked={item ? item?.isChecked : false}
                    onChange={handleChange}
                    className=" mt-2 mx-auto "
                  />
                </div>
                <div className=" grid grid-cols-2  md:grid-cols-1 place-items-center">
                  <h1 className=" block md:hidden text-lg">Add</h1>
                  <input
                    type="checkbox"
                    value={item?.permissions?.add}
                    name={item?.permissions?.add}
                    checked={item ? item?.isChecked : false}
                    onChange={handleChange}
                    className=" mt-2  mx-auto"
                  />
                </div>
                <div className=" grid grid-cols-2  md:grid-cols-1 place-items-center">
                  <h1 className=" block md:hidden text-lg">Change</h1>
                  <input
                    type="checkbox"
                    value={item?.permissions?.change}
                    name={item?.permissions?.change}
                    checked={item ? item?.isChecked : false}
                    onChange={handleChange}
                    className=" mt-2  mx-auto "
                  />
                </div>
                <div className=" grid grid-cols-2  md:grid-cols-1 place-items-center">
                  <h1 className=" block md:hidden text-lg">Delete</h1>
                  <input
                    type="checkbox"
                    value={item?.permissions?.delete}
                    name={item?.permissions?.delete}
                    checked={item ? item?.isChecked : false}
                    onChange={handleChange}
                    className=" mt-2  mx-auto "
                  />
                </div>
              </div>
            ))}
        </div>

        <button
          className="bg-green-400 py-3 px-4 float-right rounded-lg my-8 w-40 mr-3 text-white text-center text-lg  "
          type="submit"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default CreateTeamForm;
