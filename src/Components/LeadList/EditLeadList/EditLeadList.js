import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { SuccessAlert } from "../../../Shared/Alert/SuccessAlert";
import { useNavigate, useParams } from "react-router-dom";
const EditLeadList = () => {
  const { id } = useParams();

  const [profession, setProfession] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [status, setStatus] = useState("");
  const [interestBank, setInterestBank] = useState("");
  const [interestProducts, setInterestProducts] = useState("");
  // const [yearlyTransaction, setYearlyTransaction] = useState("");
  const [companyName, setcompanyName] = useState([]);
  const [company, setCompany] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [data, setData] = useState([]);
  const [leadData, setLeadData] = useState([]);

  const [selectedOption, setSelectedOption] = useState({
    name: "",
    mobile_no: "",
    // salary_type: "",
    yearly_transaction: 0,
    rental_income: 0,
  });

  const router = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/lead/${id}/`)
      .then((response) => response.json())
      .then((res) => {
        setLeadData(res);
      });
  }, [id]);
  console.log(leadData);
  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res.results;
        // const result = rest.filter((item) => item.is_partner === true);
        // console.log(result);
        setData(rest);
      });
    fetch("https://admin.aamartaka.com/api/v1/company/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res.results;
        setcompanyName(rest);
      });
  }, []);

  let instituteName = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  let compName = companyName?.map(function (item) {
    return { value: item?.name, label: item?.name };
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
      salary_type: salaryType?.value,
      status: status?.value,
      interested_bank: interestBank?.map((item) => item.value),
      interested_product: interestProducts?.map((item) => item.value),
      company_name: company?.value,
      // rental_income: 0,
      // yearly_transaction: 0,
      // yearlyTransaction: yearlyTransaction,
      // scheduleDate: scheduleDate?.value,
      // scheduleTime: scheduleTime?.value,
    };
    console.log(leadData);
    await axios
      .put(`http://127.0.0.1:8000/api/lead/${id}/`, data)
      .then((result) => {
        console.log(result);
        if (result.status === 204) {
          SuccessAlert("Lead Update Successfully", "success");
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
            defaultValue={leadData?.company_name}
            required
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
          />

          <label> Phone</label>
          <input
            defaultValue={leadData?.mobile_no}
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
            defaultValue={leadData?.profession}
            name="profession"
            onChange={setProfession}
            options={professionData}
            placeholder={leadData?.profession || "Profession"}
            className="my-2"
          />
          {(profession?.value === "salaried" ||
            profession?.value === "professional") && (
            <div>
              <label> Salary Type</label>
              <Select
                defaultValue={leadData?.salary_type}
                required
                name="salary_type"
                onChange={setSalaryType}
                options={salaryTypeData}
                placeholder={leadData?.salary_type || "Salary Type"}
                className="my-2"
              />
              <label> Company Name</label>
              <Select
                required
                onChange={setCompany}
                name="company_name"
                options={compName}
                placeholder={leadData?.company_name || "Company Name"}
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
                placeholder={leadData?.yearly_transaction || "ex: 45000"}
                onChange={handleChange}
                className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
              />
              <label> Company Name</label>
              <Select
                required
                name="company_name"
                onChange={setCompany}
                options={compName}
                placeholder={leadData?.company_name || "Company Name"}
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
                placeholder={leadData?.rental_income || "ex: 45000"}
                className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
              />
            </div>
          )}

          <label> Interested Bank</label>
          <Select
            requred
            defaultValue={interestBank}
            onChange={setInterestBank}
            closeMenuOnSelect={false}
            isMulti
            name="interested_bank"
            options={instituteName}
            className="basic-multi-select font-exo my-2"
            placeholder={
              leadData?.interested_bank?.map((item) => item) ||
              "Select At Least One"
            }
            classNamePrefix="select "
          />

          <label> Interested Products</label>
          <Select
            required
            defaultValue={interestProducts}
            onChange={setInterestProducts}
            closeMenuOnSelect={false}
            isMulti
            name="interested_product"
            options={options}
            className="basic-multi-select font-exo my-2"
            placeholder={
              leadData?.interested_product?.map((item) => item) ||
              "Select At Least One"
            }
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
            placeholder={leadData?.status || "Status"}
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

export default EditLeadList;
