import React, { useEffect, useState } from "react";

const userData = [
  {
    "name": "view",
    "id": "1",
  },
  {
    "name": "add",
    "id": "2",
  },
  {
    "name": "change",
    "id":"3",
  },
  {
    "name": "delete",
    "id": "4",
  },
];

const Table2 = () => {
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs  uppercase bg-slate-800 text-white dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Module
            </th>
            <th scope="col" className="px-6 py-3">
              View
            </th>
            <th scope="col" className="px-6 py-3">
              Add
            </th>
            <th scope="col" className="px-6 py-3">
              Change
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex  items-center"
            >
              <h1>Team</h1>
              <input
                type="checkbox"
                name="allSelect"
                checked={!users.some((user) => user?.isChecked !== true)}
                onChange={handleChange}
                className=" mx-2"
              />
            </th>
            {userData.map((user) => (
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name={user.name}
                  checked={user?.isChecked || false}
                  onChange={handleChange}
                />
              </td>
            ))}
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex  items-center"
            >
              <h1>User</h1>
              <input type="checkbox" name="view" id="" className=" mx-3" />
            </th>

            <td className="px-6 py-4">
              <input type="checkbox" name="view" id="" />
            </td>
            <td className="px-6 py-4">
              <input type="checkbox" name="view" id="" />
            </td>
            <td className="px-6 py-4">
              <input type="checkbox" name="view" id="" />
            </td>
            <td className="px-6 py-4">
              <input type="checkbox" name="view" id="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
