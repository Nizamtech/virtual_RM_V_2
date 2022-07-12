import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({ handleEditorChange, editorState }) => {
  return (
    <div className=" mx-auto w-full  ">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper"
        editorClassName="editor"
        toolbarClassName="toolbar"
      />
    </div>
  );
};

export default TextEditor;
