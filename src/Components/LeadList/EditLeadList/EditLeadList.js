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
    fetch(`${process.env.REACT_APP_HOST_URL}/api/lead/${id}/`)
      .then((response) => response.json())
      .then((res) => {
        setLeadData(res);
      });
  }, [id]);

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

  let compName = companyName?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  // let loadDataaa = leadData?.interested_bank?.map(function (item) {
  //   return { value: item, label: item };
  // });

  const salaryTypeData = [
    { value: "salary AC", label: "Salary AC" },
    { value: "hand cash", label: "Hand Cash" },
    { value: "handCash + salaryAC", label: "Hand Cash + SalaryAC" },
    { value: "cheque", label: "cheque" },
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
      name: selectedOption?.name || leadData?.name,
      mobile_no: selectedOption?.mobile_no || leadData?.mobile_no,
      // salary_type: "",
      yearly_transaction:
        selectedOption?.yearly_transaction || leadData?.yearly_transaction,
      rental_income: selectedOption?.rental_income || leadData?.rental_income,

      profession: profession || leadData?.profession,
      salary_type: salaryType?.value || leadData?.salary_type,
      status: status || leadData?.status,
      interested_bank: interestBank || leadData?.interested_bank,
      interested_product: interestProducts || leadData?.interested_product,
      company_name: company?.value || leadData?.company_name,
      // rental_income: 0,
      // yearly_transaction: 0,
      // yearlyTransaction: yearlyTransaction,
      // scheduleDate: scheduleDate?.value,
      // scheduleTime: scheduleTime?.value,
    };
    console.log(data);
    await axios
      .patch(`${process.env.REACT_APP_HOST_URL}/api/lead/${id}/`, data)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          SuccessAlert("Lead Update Successfully", "success");
          router(-1);
        } else {
          SuccessAlert("Something Wrong", "error");
          router(-1);
        }
      });
  };
  // console.log(loadDataaa);
  // loadDataaa.map((item) => console.log(item));

  console.log("leadData", leadData);
  return (
    <div className=" m-3 p-3 h-screen">
      <div className="mx-2 w-full lg:w-1/2 ">
        <form onSubmit={handleSubmit}>
          <label> Name</label>
          <input
            defaultValue={leadData?.name}
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

          <select
            className=" w-full h-10 border border-gray-300 px-2 rounded "
            name="select"
            id="aaa"
            placeholder="Select"
            onChange={(e) => setProfession(e.target.value)}
          >
            <label> SELECT One</label>
            <option
              defaultValue={leadData?.profession}
              value={leadData?.profession}
            >
              {leadData?.profession}
            </option>

            <option value="salaried">Salaried</option>
            <option value="business">Business</option>
            <option value="landloard">Landloard</option>
            <option value="professional">Professional</option>
          </select>

          {/* <Select
            required
            defaultValue={leadData?.profession}
            name="profession"
            onChange={setProfession}
            options={professionData}
            placeholder={leadData?.profession || "Profession"}
            className="my-2"
          /> */}
          {(profession === "salaried" || profession === "professional") && (
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

          {profession === "business" && (
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
          {profession === "landloard" && (
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

          <label className="ml-1  mt-2"> Interested Bank</label>
          <select
            className=" w-full h-10 border border-gray-300 px-2 rounded my-2 "
            name="select"
            id="aaa"
            placeholder="Select"
            onChange={(e) => setInterestProducts(e.target.value)}
          >
            <label> SELECT One</label>
            <option
              defaultValue={leadData?.interested_bank}
              value={leadData?.interested_bank}
            >
              {leadData?.interested_bank}
            </option>
            {data &&
              data.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
          </select>

          <label className="ml-1  my-2"> Interested Products</label>
          <select
            className=" w-full h-10 border border-gray-300 px-2 rounded my-2"
            name="select"
            id="aaa"
            placeholder="Select"
            onChange={(e) => setInterestProducts(e.target.value)}
          >
            <option
              defaultValue={leadData?.interested_product}
              value={leadData?.interested_product}
            >
              {leadData?.interested_product_name}
            </option>

            <option value="1">Credit Cart</option>
            <option value="2">Personal Loan</option>
            <option value="3">Home Loan</option>
            <option value="4">Car Loan</option>
            <option value="5">Land Loan</option>
          </select>

          <label className="ml-1 my-2"> Status</label>

          <select
            defaultValue={leadData?.status}
            className=" w-full h-10 border border-gray-300 px-2 rounded my-2"
            name="select"
            id="aaa"
            placeholder="Select"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option defaultValue={leadData?.status} value={leadData?.status}>
              {leadData?.status}
            </option>
            <option value="New">New</option>
            <option value="CNI">CNI</option>
            <option value="Non Eligible">Non Eligible</option>
            <option value="Follow">Follow</option>
          </select>
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
