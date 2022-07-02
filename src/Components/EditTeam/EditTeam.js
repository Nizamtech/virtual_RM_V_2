import React, { useEffect, useState } from "react";
import axios from "axios";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import { useParams } from "react-router-dom";
const EditTeam = () => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [permission, setPermission] = useState([]);
  const [team, setTeam] = useState([]);
  const [singleTeam, setSingleTeam] = useState([]);

  const [content_type, setContent_type] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(checked);
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
    const loadSingleData = async () => {
      const content_type = await fetch(`http://127.0.0.1:8000/api/team/${id}`);
      const rest = await content_type.json();
      setSingleTeam(rest);
    };

    loadSingleData();
    loadPermission();
  }, [id]);

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

  console.log("singleTeam", content_type, singleTeam);

  return (
    <div className=" h-screen overflow-y-scroll overflow-x-hidden">
      <form onSubmit={handleSubmitFile}>
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Team Name
          </h1>
          <input
            defaultValue={singleTeam?.name}
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
        <div className=" grid grid-cols-5 p-2 place-content-center place-items-center text-start mx-2 text-lg uppercase ">
          <div>Model</div>
          <div>View</div>
          <div>Add</div>
          <div>Change</div>
          <div>Delete</div>
        </div>
        <div>
          {content_type &&
            content_type?.map((item) => (
              <div className=" grid grid-cols-5 p-3 border place-content-center  border-gray-200 my-1">
                <h1 className=" text-start mx-2 text-lg uppercase">
                  {item?.model}{" "}
                </h1>

                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.view}
                    name={item?.permissions?.view}
                    checked={singleTeam?.permissions?.find((it) =>
                      it === item?.permissions?.view ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2 mx-auto w-full"
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.add}
                    name={item?.permissions?.add}
                    checked={singleTeam?.permissions?.find((it) =>
                      it === item?.permissions?.view ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2  mx-auto w-full"
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.change}
                    name={item?.permissions?.change}
                    checked={singleTeam?.permissions?.find((it) =>
                      it === item?.permissions?.view ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2  mx-auto w-full"
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.delete}
                    name={item?.permissions?.delete}
                    checked={singleTeam?.permissions?.find((it) =>
                      it === item?.permissions?.view ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2  mx-auto w-full"
                  />
                </div>
              </div>
            ))}
        </div>

        <button
          className="bg-green-400 py-2 px-4 float-right rounded-lg my-4 w-28 mr-3 text-white "
          type="submit"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default EditTeam;
