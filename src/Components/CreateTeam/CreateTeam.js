import React, { useEffect, useState } from "react";
import Table from "../../Shared/Table/Table";
import { useParams } from "react-router-dom";
import { teamData } from "../../MockData/MockTeam";
import Table2 from "./Table2";
import CreateTeamForm from "./CreateTeamForm";
import permission from "../../MockData/permission.json";
import content_type from "../../MockData/content_type.json";

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
    <div className="mb-10 p-3">
      <CreateTeamForm />
    </div>
  );
};

export default CreateTeam;
