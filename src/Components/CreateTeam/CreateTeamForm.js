import React, { useEffect, useState } from "react";
import PermissionForm from "./PermissionForm";

const userData = [
  {
    name: "view",
    id: 1,
  },
  {
    name: "add",
    id: 2,
  },
  {
    name: "change",
    id: 3,
  },
  {
    name: "delete",
    id: 4,
  },
];
const CreateTeamForm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div>
      <form
        action="
    
    "
      >
        <PermissionForm data="Team" handleChange={handleChange} users={users} />
        <PermissionForm data="User" handleChange={handleChange} users={users} />
      </form>
    </div>
  );
};

export default CreateTeamForm;
