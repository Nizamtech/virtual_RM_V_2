import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { SuccessAlert } from "../../../Shared/Alert/SuccessAlert";
import { useNavigate, useParams } from "react-router-dom";
import HeadingTitle from "../../../Shared/HeadingTitle/HeadingTitle";
const NewLead = () => {
  const { id } = useParams();
  const [profession, setProfession] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [status, setStatus] = useState("");
  const [vrm, setVRM] = useState("");
  const [interestBank, setInterestBank] = useState("");
  const [interestProducts, setInterestProducts] = useState("");
  // const [yearlyTransaction, setYearlyTransaction] = useState("");
  const [companyName, setcompanyName] = useState([]);
  const [company, setCompany] = useState("");
  const [vrmAgentData, setVrmAgentData] = useState([]);
  const [data, setData] = useState([]);
  const [vRMUser, setVRMUser] = useState([]);

  const [selectedOption, setSelectedOption] = useState({
    name: "",
    mobile_no: "",
    // salary_type: "",
    yearly_transaction: 0,
    rental_income: 0,
  });

  const router = useNavigate();

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/loans/institutes/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res;
        const result = res.filter((item) => item.is_partner === true);
        console.log(result);

        setData(result);
      });
    fetch("https://admin.aamartaka.com/api/v1/company/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res.results;
        setcompanyName(rest);
      });

    const loadVRMAgent = () => {
      fetch(`${process.env.REACT_APP_HOST_URL}/api/agent/register/`)
        .then((response) => response.json())
        .then((data) => {
          setVrmAgentData(data?.results);
          console.log(data);
        });
    };
    const loadSingleVRMAgent = () => {
      fetch(`${process.env.REACT_APP_HOST_URL}/api/agent/register/${id}`)
        .then((response) => response.json())
        .then((data) => setVRMUser(data));
    };
    loadVRMAgent();
    loadSingleVRMAgent();
  }, [id]);

  let instituteName = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  let compName = companyName?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  const option2 = vrmAgentData?.map((item) => {
    return {
      value: item.id,
      label:
        item?.username + "  " + `(${item?.first_name}  ${item?.last_name})`,
    };
  });

  const options = [
    { value: 1, label: "Credit Card" },
    { value: 2, label: "Personal Loan" },
    { value: 3, label: "Home Loan" },
    { value: 4, label: "Car Loan" },
    { value: 4, label: "Land Loan" },
  ];
  const professionData = [
    { value: "salaried", label: "Salaried" },
    { value: "business", label: "Business" },
    { value: "landloard", label: "Landloard" },
    { value: "professional", label: "Professional" },
  ];
  const salaryTypeData = [
    { value: "salary AC", label: "Salary AC" },
    { value: "hand cash", label: "Hand Cash" },
    { value: "handCash + salaryAC", label: "Hand Cash + SalaryAC" },
    { value: "cheque", label: "cheque" },
  ];

  const statusData = [
    { label: "New", value: "New" },
    { label: "CNI", value: "CNI" },
    { label: "Non Eligible", value: "Non Eligible" },
    { label: "Follow", value: "Follow" },
  ];

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...selectedOption };
    newData[field] = value;

    setSelectedOption(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let vrmUser;
    if (id) {
      vrmUser = vrmAgentData?.find((item) => item?.id == id);
      setVRMUser(vrmUser);
    }
    const data = {
      ...selectedOption,
      profession: profession?.value,
      salary_type: salaryType?.value || "",
      status: status?.value,
      interested_bank: interestBank?.value,
      interested_product: interestProducts?.value,
      // interested_product_name: interestProducts?.value || "",
      company_name: company?.value,
      user: id ? vrmUser?.id : vrm?.value,
      // rental_income: 0,
      // yearly_transaction: 0,
      // yearlyTransaction: yearlyTransaction,
      // scheduleDate: scheduleDate?.value,
      // scheduleTime: scheduleTime?.value,
    };
    console.log(data);
    await axios
      .post(`${process.env.REACT_APP_HOST_URL}/api/lead/`, data)
      .then((result) => {
        if (result.status === 201) {
          SuccessAlert("Lead Created Successfully", "success");
          router(-1);
        } else {
          console.log(result);
          SuccessAlert("Something Wrong", "error");
          router(-1);
        }
      });
  };
  // console.log("",vrmAgentData);
  console.log("vrmAgentData", vrmAgentData);
  return (
    <div className=" m-3 p-3 h-screen">
      <div className=" flex  items-center">
        <HeadingTitle title="New Lead" />{" "}
        {vRMUser?.id && (
          <h1 className="mt-0 ml-2 text-2xl text-sky-500 mb-5 ">
            / {vRMUser?.first_name + " " + vRMUser?.last_name}
          </h1>
        )}
      </div>
      <div className="mx-2 w-full  flex justify-items-center justify-center">
        <form onSubmit={handleSubmit}>
          <label> Name</label>
          <input
            required
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
          />

          <label> Phone</label>
          <input
            required
            type="text"
            name="mobile_no"
            onInput={`() if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)`}
            maxLength="11"
            // max={9999999999}
            // min={1000000000}
            onChange={handleChange}
            placeholder="Phone Number"
            className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
          />
          <label> Profession</label>
          <Select
            required
            name="profession"
            onChange={setProfession}
            options={professionData}
            placeholder="Profession"
            className="my-2"
          />
          {(profession?.value === "salaried" ||
            profession?.value === "professional") && (
            <div>
              <label> Salary Type</label>
              <Select
                required
                name="salary_type"
                onChange={setSalaryType}
                options={salaryTypeData}
                placeholder="Salary Type"
                className="my-2"
              />
              <label> Company Name</label>
              <Select
                required
                onChange={setCompany}
                name="company_name"
                options={compName}
                placeholder="Company Name"
                className="my-2"
              />
            </div>
          )}

          {profession?.value === "business" && (
            <div>
              <label>Yearly Transaction</label>
              <input
                required
                type="number"
                name="yearly_transaction"
                max="100000000"
                min="1000"
                onChange={handleChange}
                placeholder="ex: 45000"
                className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
              />
              <label> Company Name</label>
              <Select
                required
                name="company_name"
                onChange={setCompany}
                options={compName}
                placeholder="Company Name"
                className="my-2"
              />
            </div>
          )}
          {profession?.value === "landloard" && (
            <div>
              <label>Rental Income</label>
              <input
                required
                type="number"
                name="rental_income"
                max="1000000000"
                min="1000"
                onChange={handleChange}
                placeholder="ex: 45000"
                className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
              />
            </div>
          )}

          <label> Interested Bank</label>
          <Select
            requred
            defaultValue={interestBank}
            onChange={setInterestBank}
            name="interested_bank"
            options={instituteName}
            className="basic-multi-select font-exo my-2"
            placeholder="Select At least One"
            classNamePrefix="select "
          />

          <label> Interested Products</label>
          <Select
            required
            defaultValue={interestProducts}
            onChange={setInterestProducts}
            name="interested_product"
            options={options}
            className="basic-multi-select font-exo my-2"
            placeholder="Select At least One"
            classNamePrefix="select"
          />

          <label> Status</label>
          <Select
            defaultValue={"in process"}
            required
            name="status"
            onChange={setStatus}
            options={statusData}
            className="my-2"
          />

          {!id && (
            <div>
              <label>VRM Agent</label>
              <Select
                required
                name="vrmagent"
                onChange={setVRM}
                options={option2}
                className="my-2"
              />
            </div>
          )}
          <button
            className="my-4 mx-auto w-60 text-white bg-[#3ac47d] border-[#3ac47d]  text-lg px-5 py-3 rounded-md font-exo flex justify-center items-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewLead;
