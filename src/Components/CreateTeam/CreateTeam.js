import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teamData } from "../../MockData/MockTeam";
import CreateTeamForm from "./CreateTeamForm";
import permission from "../../MockData/permission.json";
import content_type from "../../MockData/content_type.json";

const Catalogues = [
  {
    id: "01",
    name: "View",
  },
  {
    id: "02",
    name: "Add",
  },
  {
    id: "03",
    name: "Change",
  },
  {
    id: "04",
    name: "Delete",
  },
];
const CreateTeam = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [state, setState] = useState({
    isAllSelected: false,
    checkList: [
      {
        name: "city",
        value: "bangalore",
        checked: false,
      },
      {
        name: "city",
        value: "chennai",
        checked: false,
      },
      {
        name: "city",
        value: "delhi",
        checked: false,
      },
    ],
  });

  const teamSingleData = teamData?.find((item) => item.id == id);

  const handleSubmit = () => {};

  const model = permission.filter(
    (item) => item?.content_type?.model === "user"
  );

  // const rest = content_type.map(item=>item.content_type?.model)
  // console.log(model);

  let result = [];

  for (const key of content_type) {
    let perm = permission.filter(
      (item) => item?.content_type?.model === key.model
    );

    let permId = {};

    for (const item of perm) {
      if (item.codename.includes("add_")) {
        permId["add"] = item.id;
      } else if (item.codename.includes("change_")) {
        permId["change"] = item.id;
      } else if (item.codename.includes("view_")) {
        permId["view"] = item.id;
      } else if (item.codename.includes("delete_")) {
        permId["delete"] = item.id;
      }
    }
    result[key.model] = permId;
  }

  return (
    <div className=" h-screen p-3">
      <form onSubmit={handleSubmit}>
        {/* <h1 className=" text-2xl text-gray-500">Create Team</h1> */}
        {/* name  */}
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Team Name
          </h1>
          <input
            className=" w-full h-12 ml-1 px-4 rounded-md"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            defaultValue={teamSingleData ? teamSingleData?.team_name : ""}
          />
        </div>
        {/* name end  */}
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Permission
          </h1>

          <CreateTeamForm result={result} />
        </div>
        {data && data?.map((item) => <h1> Hello</h1>)}

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

export default CreateTeam;
