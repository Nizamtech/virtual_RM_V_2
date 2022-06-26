import React, { useEffect, useState } from "react";
import { teamData } from "../../MockData/MockTeam";

import DataShowTable from "../../Shared/Table/DataShowTable";

const ManageTeam = () => {
  // const [teamData, setTeamData] = useState(null);

  // console.log(teamData);
  useEffect(() => {
    // fetch(teamData)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }, []);
  return (
    <div className=" h-screen p-3">
      <DataShowTable item={teamData} />
    </div>
  );
};

export default ManageTeam;
