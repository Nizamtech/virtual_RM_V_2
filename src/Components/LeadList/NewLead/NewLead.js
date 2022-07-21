import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { SuccessAlert } from "../../../Shared/Alert/SuccessAlert";
import { useNavigate } from "react-router-dom";
const NewLead = () => {
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

  const [selectedOption, setSelectedOption] = useState({
    name: "",
    mobile_no: "",
    // salary_type: "",
    yearly_transaction: 0,
    rental_income: 0,
  });

  const router = useNavigate();

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res.results;
        // const result = rest.filter((item) => item.is_partner === true);
        // console.log(result);
        console.log(rest);
        setData(rest);
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
        .then((data) => setVrmAgentData(data?.results));
    };
    loadVRMAgent();
  }, []);

  console.log(vrmAgentData);

  let instituteName = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  let compName = companyName?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  const option2 = vrmAgentData?.map((item) => {
    return { value: item.id, label: item?.first_name + item?.last_name };
  });

  const options = [
    { value: "Personal Loan", label: "Personal Loan" },
    { value: "Car Loan", label: "Car Loan" },
    { value: "Home Loan", label: "Home Loan" },
    { value: "Credit Cart", label: "Credit Cart" },
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

    const data = {
      ...selectedOption,
      profession: profession?.value,
      salary_type: salaryType?.value || "",
      status: status?.value,
      interested_bank: interestBank?.value,
      interested_product: interestProducts?.value,
      company_name: company?.value,
      user: vrm?.value,
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
          SuccessAlert("Something Wrong", "error");
          router(-1);
        }
      });
  };

  return (
    <div className=" m-3 p-3 h-screen">
      <div className="mx-2 w-full lg:w-1/2 ">
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

          <label>VRM Agent</label>
          <Select
            required
            name="vrmagent"
            onChange={setVRM}
            options={option2}
            className="my-2"
          />
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
