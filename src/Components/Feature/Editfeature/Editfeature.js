import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TextEditor from "../TextEditor/TextEditor";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const Editfeature = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState([]);
  const editorRef = useRef(null);
  const editorRef2 = useRef(null);
  const editorRef3 = useRef(null);
  const router = useNavigate();

  const [inst, setInst] = useState([]);
  const [bank, setBank] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/feature/${id}/`
      );
      setFeature(response?.data);
    };

    const loadBank = async () => {
      const response = await axios.get(
        `https://admin.aamartaka.com/api/v1/institutes/`
      );
      console.log(response?.data);
      setInst(response?.data?.results);
    };
    loadBank();
    loadData();
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (editorRef.current || editorRef3.current || editorRef3.current) {
      const data = {
        bank_name: bank,
        feature: editorRef.current.getContent(),
        eligibility: editorRef2.current.getContent(),
        short_feature: editorRef3.current.getContent(),
      };
      console.log(data);
      axios
        .put(`${process.env.REACT_APP_HOST_URL}/api/feature/${id}/`, data)
        .then(function (response) {
          console.log("response", response);
          if (response?.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Successfully Update",
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
    }
  };
  console.log(bank);
  return (
    <div className=" m-3 p-3">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Bank Name
          </label>
          <input
            defaultValue={feature?.bank_name}
            className="w-full h-10 px-3 border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white z-50"
            list="banks"
            name="nank_name"
            id="bank"
            onChange={(e) => setBank(e.target.value)}
          />
          <datalist id="banks">
            {inst && inst?.map((item) => <option value={item?.name}></option>)}
          </datalist>
          {/* <Select
            defaultValue={{
              label: ` ${feature && feature?.bank_name} `,
              value: 0,
            }}
            required
            name="bank_name"
            onChange={setBank}
            options={options}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white z-50"
          /> */}
        </div>

        <div>
          <h1 className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
            FEATURE
          </h1>
          <TextEditor data={feature?.feature} editorRef={editorRef} />
        </div>
        <div>
          <h1 className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
            ELIGIBILITY
          </h1>
          <TextEditor data={feature?.eligibility} editorRef={editorRef2} />
        </div>
        <div>
          <h1 className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
            SHORT FEATURE
          </h1>
          <TextEditor data={feature?.short_feature} editorRef={editorRef3} />
        </div>
        <button
          type="submit"
          className=" py-2 px-4 text-white bg-green-400 rounded my-4"
        >
          Update Now
        </button>
      </form>
    </div>
  );
};

export default Editfeature;
