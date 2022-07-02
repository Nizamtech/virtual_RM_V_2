import React, { useEffect, useState } from "react";
const CreateTeamForm = () => {
  const [permission, setPermission] = useState([]);
  const [content_type, setContent_type] = useState([]);
  const [result, setResult] = useState([]);

  // console.log(permission, content_type);
  useEffect(() => {
    const loadPermission = async () => {
      const permission = await fetch(
        "http://localhost:8000/accounts/user/perm/"
      );
      const result = await permission.json();
      setPermission(result);
      // console.log(permission);

      const content_type = await fetch(
        "http://localhost:8000/accounts/content_type/"
      );
      const rest = await content_type.json();
      setContent_type(rest);
    };

    // loadContent_type();
    loadPermission();
  }, []);

  // let result = [];

  for (const key of content_type) {
    let perm = permission.filter(
      (item) => item?.content_type?.model === key.model
    );

    console.log(perm);

    let permId = {};

    for (const item of perm) {
      if (item.codename.includes("add_")) {
        permId.add = item.id;
      } else if (item.codename.includes("change_")) {
        permId.change = item.id;
      } else if (item.codename.includes("view_")) {
        permId.view = item.id;
      } else if (item.codename.includes("delete_")) {
        permId.delete = item.id;
      }
    }
    console.log(permId);
    // setResult(...(result[key.model] = permId));
  }

  // const handleChange = (e) => {
  //   const { name, checked } = e.target;
  //   if (name === "allSelect") {
  //     let tempUser = users.map((user) => {
  //       return { ...user, isChecked: checked };
  //     });
  //     setUsers(tempUser);
  //   } else {
  //     let tempUser = users.map((user) =>
  //       user.name === name ? { ...user, isChecked: checked } : user
  //     );
  //     setUsers(tempUser);
  //   }
  // };

  // console.log(result);

  return (
    <div>
      <h1>Permission</h1>
      {result && result?.map((item) => <h1>Hi</h1>)}
    </div>
  );
};

export default CreateTeamForm;
