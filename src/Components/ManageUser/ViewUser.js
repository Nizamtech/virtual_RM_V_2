import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const singleUser = await fetch(
        `http://127.0.0.1:8000/api/user/register/${id}/`
      );
      const rest = await singleUser.json();
      setUser(rest);
    };

    loadUser();
  }, [id]);

  return (
    <div className=" h-screen m-3 p-3 ">
      <div className="grid place-items-center">
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-[390px] rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://flowbite.com/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between leading-normal w-96">
            <div className=" p-4 w-full">
              <div>
                <h1 className=" text-gray-400 text-sm ">User Name</h1>
                <h1 className=" text-sky-400 text-lg leading-none">
                  {user?.username}{" "}
                </h1>
              </div>
              <div className=" mt-2">
                <h1 className=" text-gray-400 text-sm">Email</h1>
                <h1 className=" text-sky-400 text-lg leading-none">
                  {user?.email}{" "}
                </h1>
              </div>
              <div className=" mt-2">
                <h1 className=" text-gray-400 text-sm">Phone</h1>
                <h1 className=" text-sky-400 text-lg leading-none">
                  {user?.phone}{" "}
                </h1>
              </div>
              <div className=" mt-2">
                <h1 className=" text-gray-400 text-sm">Team Name</h1>
                <h1 className=" text-sky-400 text-lg leading-none">
                  {user?.team || "N/A"}{" "}
                </h1>
              </div>
              <div className=" mt-2">
                <p className=" text-gray-400 text-sm">Joining Date</p>
                <p className=" text-sky-400 text-lg leading-none">
                  {user?.created_at}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
