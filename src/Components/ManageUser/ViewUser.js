import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ViewUser = ({ id }) => {
  // const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const singleUser = await fetch(
        `${process.env.REACT_APP_HOST_URL}/api/user/register/${id}/`
      );
      const rest = await singleUser.json();
      setUser(rest);
    };

    loadUser();
  }, [id]);

  return (
    <div className=" grid place-content-center place-items-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user?.first_name + " " + user?.last_name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          User: {user?.username}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Email: {user?.email}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Phone: {user?.phone}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Joined: {user?.created_at}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Team Name: {user?.team || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default ViewUser;
