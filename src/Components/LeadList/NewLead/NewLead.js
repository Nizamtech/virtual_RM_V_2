import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
const NewLead = () => {
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

  const [selectedOption, setSelectedOption] = useState({
    name: "",
    mobile_no: "",
    // salary_type: "",
    yearly_transaction: "",
    rental_income: "",
  });

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

  const companyNameData = [
    { label: "aamartaka", value: "aamartaka" },
    { label: "Robi", value: "Robi" },
    { label: "Grameen", value: "Grameen" },
    { label: "Asha", value: "Asha" },
    { label: "Lonka Bangla", value: "Lonka Bangla" },
    { label: "Indigo", value: "Indigo" },
    { label: "Nizam", value: "Nizam" },
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
      profession_name: profession?.value,
      salary_type: salaryType?.value,
      status_name: status?.value,
      // interestBank: interestBank?.map((item) => item.value),
      // interestProducts: interestProducts?.map((item) => item.value),
      company_name: company?.value,
      // yearlyTransaction: yearlyTransaction,
      // scheduleDate: scheduleDate?.value,
      // scheduleTime: scheduleTime?.value,
    };
    console.log(data);
    await axios
      .post("http://127.0.0.1:8000/api/lead/", data)
      .then((result) => console.log(result.data));
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
                name="saraly_type"
                onChange={setSalaryType}
                options={salaryTypeData}
                placeholder="Salary Type"
                className="my-2"
              />
              <label> Company Name</label>
              <Select
                required
                name="companyName"
                onChange={setCompany}
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
                name="companyName"
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
                name="rentalIncome"
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
            closeMenuOnSelect={false}
            isMulti
            name="Interested Bank"
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
            closeMenuOnSelect={false}
            isMulti
            name="Interested Product"
            options={options}
            className="basic-multi-select font-exo my-2"
            placeholder="Select At least One"
            classNamePrefix="select"
          />

          <label> Status</label>
          <Select
            defaultValue={"in process"}
            required
            name="Status"
            onChange={setStatus}
            options={statusData}
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
