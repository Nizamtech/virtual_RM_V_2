import React from "react";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import CreateUserForm from "./CreateUserForm";
import UserForm from "./UserForm";

const CreateUser = () => {
  return (
    <div className=" h-screen p-3 my-3 overflow-scroll">
      <h1 className=" ml-2 text-2xl text-gray-500 mb-10">Create A New User </h1>
      {/* <HeadingTitle title="Create A New User " /> */}
      <CreateUserForm />
    </div>
  );
};

export default CreateUser;
