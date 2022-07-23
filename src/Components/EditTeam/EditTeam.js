import React, { useEffect, useState } from "react";
import axios from "axios";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import { useNavigate, useParams } from "react-router-dom";
const EditTeam = () => {
  const { id } = useParams();
  const router = useNavigate();

  const [team, setTeam] = useState("");
  const [singleTeam, setSingleTeam] = useState([]);
  const [singlePermission, setSinglePermission] = useState([]);
  const [content_type, setContent_type] = useState([]);
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    if (checked) {
      setSingleTeam([...singleTeam, parseInt(name)]);
    }
    if (!checked) {
      const restData = singleTeam.filter((item) => item !== parseInt(name));

      setSingleTeam(restData);
    }
    // if (name === "allSelect") {
    //   let tempUser = content_type.map((user) => {
    //     return { ...user, isChecked: checked };
    //   });
    //   setUsers(tempUser);
    // } else {
    //   let tempUser = content_type.map((user) =>
    //     user.name === name ? { ...user, isChecked: checked } : user
    //   );
    //   setUsers(tempUser);
    // }
  };
  // console.log(permission, content_type);
  useEffect(() => {
    const loadPermission = async () => {
      const content_type = await fetch(
        `${process.env.REACT_APP_HOST_URL}/accounts/content_type/`
      );
      const rest = await content_type.json();
      setContent_type(rest);
    };
    const loadSingleData = async () => {
      const content_type = await fetch(
        `${process.env.REACT_APP_HOST_URL}/api/team/${id}`
      );
      const rest = await content_type.json();
      setSingleTeam(rest?.permissions);
      setSinglePermission(rest);
    };

    loadSingleData();
    loadPermission();
  }, [id]);

  const handleName = (e) => {
    setTeam(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmitFile = async (event) => {
    event.preventDefault();

    const data = {
      name: team || singlePermission?.name,
      permissions: singleTeam,
      description: description || singlePermission?.name,
    };

    axios
      .patch(`${process.env.REACT_APP_HOST_URL}/api/team/${id}/`, data)
      .then((response) => {
        if (response.status === 200) {
          SuccessAlert("Team Permission Updated", "success");
          router(-1);
        }
      })
      .catch((error) => {
        SuccessAlert(error.message, "error");
      });
  };

  return (
    <div className=" overflow-y-scroll overflow-x-hidden  ">
      <form onSubmit={handleSubmitFile} className="my-8">
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Team Name
          </h1>
          <input
            defaultValue={singlePermission?.name}
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
        <div className=" grid grid-cols-5 p-2  text-start mx-2 text-lg uppercase bg-black text-white ml-2 ">
          <div>Model</div>
          <div>View</div>
          <div>Add</div>
          <div>Change</div>
          <div>Delete</div>
        </div>
        <div className="ml-2">
          {content_type &&
            content_type?.map((item) => (
              <div className=" grid grid-cols-5 p-3 border  border-gray-200 my-1">
                <h1 className=" text-start mx-2 text-lg uppercase">
                  {item?.model}{" "}
                </h1>

                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.view}
                    name={item?.permissions?.view}
                    checked={singleTeam?.find((it) =>
                      it === item?.permissions?.view ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2 mx-auto "
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.add}
                    name={item?.permissions?.add}
                    checked={singleTeam?.find((it) =>
                      it === item?.permissions?.add ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2  mx-auto "
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.change}
                    name={item?.permissions?.change}
                    checked={singleTeam?.find((it) =>
                      it === item?.permissions?.change ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2  mx-auto "
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    value={item?.permissions?.delete}
                    name={item?.permissions?.delete}
                    checked={singleTeam?.find((it) =>
                      it === item?.permissions?.delete ? true : false
                    )}
                    onChange={handleChange}
                    className=" mt-2  mx-auto "
                  />
                </div>
              </div>
            ))}
        </div>
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Description
          </h1>
          <textarea
            required
            defaultValue={singlePermission?.description}
            className=" w-full h-24 ml-1 px-4 rounded-md"
            type="text"
            name="description"
            id=""
            placeholder="Description"
            onChange={handleDescription}
          />
        </div>
        <button
          className="bg-green-400 py-3 px-4 float-right rounded-lg my-8 w-40 mr-3 text-white text-center text-lg  "
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTeam;
