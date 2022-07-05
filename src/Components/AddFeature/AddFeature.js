import React, { useEffect, useState } from "react";
import Select from "react-select";
import TextEditor from "./TextEditor";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import { useNavigate } from "react-router-dom";
const AddFeature = () => {
  const router = useNavigate();
  const [inst, setInst] = useState([]);
  const [bank, setBank] = useState("");

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((json) => setInst(json.results));
  }, []);

  let options = inst?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    const data = {
      bank_name: bank?.value,
      feature: convertedContent,
      eligibility: convertedContent2,
      short_feature: convertedContent3,
    };
    console.log(data);

    axios
      .post(`http://127.0.0.1:8000/api/feature/`, data)
      .then(function (response) {
        console.log("response", response);
        if (response?.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Successfully add",
            showConfirmButton: false,
            timer: 1500,
          });
          router("/feature");
        } else {
          Swal.fire({
            icon: "error",
            title: "Something Wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(function (error) {
        console.log("error", error);
        console.log(error);
      });
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [editorState2, setEditorState2] = useState(() =>
    EditorState.createEmpty()
  );
  const [editorState3, setEditorState3] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const [convertedContent2, setConvertedContent2] = useState(null);
  const [convertedContent3, setConvertedContent3] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const handleEditorChange2 = (state) => {
    setEditorState2(state);
    convertContentToHTML2();
  };
  const handleEditorChange3 = (state) => {
    setEditorState3(state);
    convertContentToHTML3();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const convertContentToHTML2 = () => {
    let currentContentAsHTML = convertToHTML(editorState2.getCurrentContent());
    setConvertedContent2(currentContentAsHTML);
  };
  const convertContentToHTML3 = () => {
    let currentContentAsHTML = convertToHTML(editorState3.getCurrentContent());
    setConvertedContent3(currentContentAsHTML);
  };

  return (
    <div className=" my-3 p3 mx-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-6 md:mb-0 z-50">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Bank Name
          </label>
          <Select
            required
            name="bank_name"
            onChange={setBank}
            options={options}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <div>
          <h1 className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
            FEATURE
          </h1>
          <TextEditor
            handleEditorChange={handleEditorChange}
            editorState={editorState}
          />
        </div>
        <div>
          <h1 className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
            ELIGIBILITY
          </h1>
          <TextEditor
            handleEditorChange={handleEditorChange2}
            editorState={editorState2}
          />
        </div>
        <div>
          <h1 className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
            SHORT FEATURE
          </h1>
          <TextEditor
            handleEditorChange={handleEditorChange3}
            editorState={editorState3}
          />
        </div>
        <button
          className=" my-3 bg-green-500 w-20 ml-2 py-3 rounded-md border border-green-500 text-white -tracking-tighter hover:bg-transparent hover:text-red-500 duration-300"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddFeature;
