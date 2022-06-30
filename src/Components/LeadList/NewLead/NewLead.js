import React, { useState } from "react";
import Select from "react-select";

const NewLead = () => {
  const [profession, setProfession] = useState(null);
  const [salaryType, setSalaryType] = useState(null);
  const [status, setStatus] = useState(null);
  const [interestBank, setInterestBank] = useState(null);
  const [interestProducts, setInterestProducts] = useState(null);
  // const [yearlyTransaction, setYearlyTransaction] = useState(null);
  const [companyName, setcompanyName] = useState(null);
  const [scheduleDate, setScheduleDate] = useState(null);
  const [scheduleTime, setScheduleTime] = useState(null);

  const [selectedOption, setSelectedOption] = useState({
    name: "",
    phone: "",
    salaryType: "",
    yearlyTransaction: "",
    rentalIncome: "",
  });

  const colourOptions = [
    { label: "aamartaka" },
    { label: "Robi" },
    { label: "Grameen" },
    { label: "Asha" },
    { label: "Lonka Bangla" },
    { label: "Indigo" },
    { label: "Nizam" },
  ];

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate2", label: "Chocolate2" },
    { value: "strawberry2", label: "Strawberry2" },
    { value: "vanilla2", label: "Vanilla2" },
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
  const scheduleDateData = [
    { label: "Jun-15 Wed", value: "Jun-15 Wed" },
    { label: "Jun-16 Thu", value: "Jun-18 Thu" },
    { label: "Jun-17 Fri", value: "Jun-17 Fri" },
    { label: "Jun-18 Sat", value: "Jun-18 Sat" },
    { label: "Jun-19 Sun", value: "Jun-19 Sun" },
    { label: "Jun-20 Mon", value: "Jun-20 Mon" },
    { label: "Jun-21 Tue", value: "Jun-21 Tue" },
    { label: "Jun-22 Wed", value: "Jun-22 Wed" },
  ];
  const scheduleTimeData = [
    { label: "8:00 AM - 10:00 AM", value: "8:00 AM - 10:00 AM" },
    { label: "10:00 AM - 12:00 AM", value: "10:00 AM - 12:00 AM" },
    { label: "12:00 PM - 02:00 PM", value: "12:00 PM - 02:00 PM" },
    { label: "02:00 PM - 04:00 PM", value: "02:00 PM - 04:00 PM " },
  ];

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...selectedOption };
    newData[field] = value;

    setSelectedOption(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...selectedOption,
      profession: profession?.value,
      salaryType: salaryType?.value,
      status: status?.value,
      interestBank: interestBank?.map((item) => item.value),
      interestProducts: interestProducts?.map((item) => item.value),
      //   yearlyTransaction: yearlyTransaction,
      companyName: companyName?.value,
      scheduleDate: scheduleDate?.value,
      scheduleTime: scheduleTime?.value,
    };
    console.log(data);
  };
  //   console.log(
  //     selectedOption,
  //     profession,
  //     salaryType,
  //     status,
  //     interestBank,
  //     interestProducts,
  //     yearlyTransaction,
  //     companyName,
  //     scheduleDate,
  //     scheduleTime
  //   );
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
            name="phone"
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
                name="profession"
                onChange={setSalaryType}
                options={salaryTypeData}
                placeholder="Salary Type"
                className="my-2"
              />
              <label> Company Name</label>
              <Select
                required
                name="companyName"
                onChange={setcompanyName}
                options={companyNameData}
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
                name="yearlyTransaction"
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
                onChange={setcompanyName}
                options={companyNameData}
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
            options={options}
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
