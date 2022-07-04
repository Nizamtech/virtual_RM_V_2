import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
// import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  return (
    <div className=" h-60 w-60">
      <Editor />
    </div>
  );
};

export default TextEditor;
