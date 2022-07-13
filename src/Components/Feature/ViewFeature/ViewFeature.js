import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
const ViewFeature = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/feature/${id}/`
      );
      setFeature(response?.data);
    };

    loadData();
  }, [id]);

  console.log(feature);
  return (
    <div className=" h-screen overflow-y-scroll  m-3 p-3">
      <div>
        <h1 className="  ml-4 text-gray-400 text-lg">Bank Name</h1>
        <h1 className=" text-2xl text-sky-400 my-2 px-4">
          {" "}
          {feature?.bank_name}
        </h1>
      </div>

      <div className="px-4 mt-10 myShadow3 p-3 rounded-lg">
        <h1 className="  text-gray-400 text-lg">Feature</h1>
        <div className="my-2">
          {feature && ReactHtmlParser(feature?.feature)}{" "}
        </div>
      </div>
      <div className="px-4 mt-10 myShadow3 p-3 rounded-lg">
        <h1 className="  text-gray-400 text-lg">Short Feature</h1>
        <div className="my-2">
          {" "}
          {feature && ReactHtmlParser(feature?.short_feature)}{" "}
        </div>
      </div>
      <div className="px-4 mt-10 myShadow3 p-3 rounded-lg">
        <h1 className="  text-gray-400 text-lg">Eligibility</h1>
        <div className="my-2">
          {" "}
          {feature && ReactHtmlParser(feature?.eligibility)}{" "}
        </div>
      </div>
    </div>
  );
};

export default ViewFeature;
